/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-20 Bradley M. Bell

CppAD is distributed under the terms of the
             Eclipse Public License Version 2.0.

This Source Code may also be made available under the following
Secondary License when the conditions for such availability set forth
in the Eclipse Public License, Version 2.0 are satisfied:
      GNU General Public License, Version 2.0 or later.
---------------------------------------------------------------------------- */
/*
$begin cppadcg_det_minor.cpp$$
$spell
    cppadcg
$$

$section Cppadcg Speed: Gradient of Determinant by Minor Expansion$$


$head Specifications$$
$cref link_det_minor$$

$head Implementation$$
// a cppadcg version of this test is not yet implemented
$srccode%cpp% */
# include <map>
# include <cppad/utility/vector.hpp>

// list of possible options
extern std::map<std::string, bool> global_option;

bool link_det_minor(
    size_t                     size     ,
    size_t                     repeat   ,
    CppAD::vector<double>     &matrix   ,
    CppAD::vector<double>     &gradient )
{   return false; }
/* %$$
$end
*/
