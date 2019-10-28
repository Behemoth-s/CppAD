/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-19 Bradley M. Bell

CppAD is distributed under the terms of the
             Eclipse Public License Version 2.0.

This Source Code may also be made available under the following
Secondary License when the conditions for such availability set forth
in the Eclipse Public License, Version 2.0 are satisfied:
      GNU General Public License, Version 2.0 or later.
---------------------------------------------------------------------------- */

# include <cppad/local/pod_vector.hpp>
# include <cppad/core/cppad_assert.hpp>

// documentation for this routine is in the file below
# include <cppad/local/graph/json_writer.hpp>

CPPAD_LIB_EXPORT void CppAD::local::graph::writer(
    std::string&                              json                   ,
    const std::string&                        function_name          ,
    const CppAD::vector<std::string>&         atomic_name_vec        ,
    const size_t&                             n_dynamic_ind          ,
    const size_t&                             n_independent          ,
    const CppAD::vector<double>&              constant_vec           ,
    const CppAD::vector<graph_op_struct>&     operator_vec           ,
    const CppAD::vector<size_t>&              operator_arg           ,
    const CppAD::vector<size_t>&              dependent_vec          )
{   using std::string;
    // --------------------------------------------------------------------
    if( local::graph::op_name2enum.size() == 0 )
    {   CPPAD_ASSERT_KNOWN( ! thread_alloc::in_parallel() ,
            "call to set_operator_info in parallel mode"
        );
        local::graph::set_operator_info();
    }
    // --------------------------------------------------------------------
    //
    // set: n_usage
    size_t n_usage = operator_vec.size();
    //
    // set: is_graph_op_used
    pod_vector<bool> is_graph_op_used(n_graph_op);
    for(size_t i = 0; i < n_graph_op; ++i)
        is_graph_op_used[i] = false;
    for(size_t i = 0; i < n_usage; ++i)
        is_graph_op_used[ operator_vec[i].op_enum ] = true;
    //
    // set: n_define and graph_code
    size_t n_define = 0;
    pod_vector<size_t> graph_code(n_graph_op);
    for(size_t i = 0; i < n_graph_op; ++i)
    {   graph_code[i] = 0;
        if( is_graph_op_used[i] )
            graph_code[i] = ++n_define;
    }
    // ----------------------------------------------------------------------
    // output: starting '{' for this graph
    json = "{\n";
    //
    // output: function_name
    json += "'function_name' : '" + function_name + "',\n";
    //
    // output: op_define_vec
    json += "'op_define_vec' : [ " + to_string(n_define) + ", [\n";
    size_t count_define = 0;
    for(size_t i = 0; i < n_graph_op; ++i)
    {   if( is_graph_op_used[i] )
        {   ++count_define;
            const string name = op_enum2name[i];
            size_t op_code    = graph_code[i];
            size_t n_arg      = op_enum2fixed_n_arg[i];
            json += "{ 'op_code':" + to_string(op_code);
            json += ", 'name':'" + name + "'";
            if( n_arg != 0 )
                json += ", 'n_arg':" + to_string(n_arg);
            json += " }";
            if( count_define < n_define )
                json += ",\n";
        }
    }
    json += " ]\n] ,\n";
    //
    // output: n_dynamic_ind
    json += "'n_dynamic_ind' : " + to_string( n_dynamic_ind ) + ",\n";
    //
    // output: n_independent
    json += "'n_independent' : " + to_string( n_independent ) + ",\n";
    //
    // output: constant_vec
    size_t n_constant = constant_vec.size();
    json += "'constant_vec' : [ " + to_string(n_constant) + ", [\n";
    for(size_t i = 0; i < n_constant; ++i)
    {   json += to_string( constant_vec[i] );
        if( i + 1 < n_constant )
            json += ",\n";
    }
    json += " ] ],\n";
    // -----------------------------------------------------------------------
    // output: op_usage_vec
    json += "'op_usage_vec' : [ " + to_string(n_usage) + ", [\n";
    for(size_t i = 0; i < n_usage; ++i)
    {   graph_op_enum op_enum  = operator_vec[i].op_enum;
        size_t       n_result  = operator_vec[i].n_result;
        size_t       n_arg     = operator_vec[i].n_arg;
        size_t       start_arg = operator_vec[i].start_arg;
        size_t       op_code   = graph_code[ op_enum ];
        switch( op_enum )
        {
            // --------------------------------------------------------------
            // sum
            case sum_graph_op:
            json += "[ " + to_string(op_code) + ", 1, ";
            json += to_string(n_arg) + ", [ ";
            for(size_t j = 0; j < n_arg; ++j)
            {   json += to_string( operator_arg[start_arg + j] );
                if( j + 1 < n_arg )
                    json += ", ";
            }
            json += "] ]";
            break;

            // --------------------------------------------------------------
            // atom
            case atom_graph_op:
            CPPAD_ASSERT_UNKNOWN( n_arg > 0 );
            {   size_t name_index = operator_arg[start_arg - 3];
                string name = atomic_name_vec[name_index];
                json += "[ " + to_string(op_code) + ", ";
                json += "'" + name + "', ";
            }
            json += to_string(n_result) + ", ";
            json += to_string(n_arg) + ", [";
            for(size_t j = 0; j < n_arg; ++j)
            {   json += to_string( operator_arg[start_arg + j] );
                if( j + 1 < n_arg )
                    json += ", ";
                 else
                    json += " ]";
            }
            json += " ]";
            break;

            // --------------------------------------------------------------
            // comparison operators
            case comp_eq_graph_op:
            case comp_ne_graph_op:
            case comp_lt_graph_op:
            case comp_le_graph_op:
            CPPAD_ASSERT_UNKNOWN( n_result == 0 );
            CPPAD_ASSERT_UNKNOWN( n_arg == 2 );
            json += "[ " + to_string(op_code) + ", 0, 2, [ ";
            json += to_string( operator_arg[start_arg + 0] ) + ", ";
            json += to_string( operator_arg[start_arg + 1] ) + " ] ]";
            break;

            // --------------------------------------------------------------
            default:
            CPPAD_ASSERT_UNKNOWN( n_result == 1 );
            CPPAD_ASSERT_UNKNOWN( op_enum2fixed_n_arg[op_enum] == n_arg );
            json += "[ " + to_string(op_code) + ", ";
            for(size_t j = 0; j < n_arg; ++j)
            {   json += to_string( operator_arg[start_arg + j] );
                if( j + 1 < n_arg )
                    json += ", ";
                 else
                    json += " ]";
            }
            break;

        } // end switch
        if( i + 1 < n_usage )
            json += ",\n";
    }
    json += "\n] ],\n";
    // ----------------------------------------------------------------------
    // output: dependent_vec
    size_t n_dependent = dependent_vec.size();
    json += "'dependent_vec' : [ " + to_string(n_dependent) + ", [ ";
    for(size_t i = 0; i < n_dependent; ++i)
    {   json += to_string( dependent_vec[i] );
        if( i + 1 < n_dependent )
            json += ", ";
    }
    json += " ] ]\n";
    //
    // output: ending '}' for this graph
    json += "}\n";
    // ----------------------------------------------------------------------
    // Convert the single quote to double quote
    for(size_t i = 0; i < json.size(); ++i)
        if( json[i] == '\'' ) json[i] = '"';
    //
    return;
}