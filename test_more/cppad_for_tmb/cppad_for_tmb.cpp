/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-18 Bradley M. Bell

CppAD is distributed under the terms of the
             Eclipse Public License Version 2.0.

This Source Code may also be made available under the following
Secondary License when the conditions for such availability set forth
in the Eclipse Public License, Version 2.0 are satisfied:
           GNU General Public License, Version 3.0.
---------------------------------------------------------------------------- */
# include <cppad/cppad.hpp>
# include <omp.h>

extern bool implicit_ctor(void);
extern bool prefer_reverse(void);
extern bool multi_atomic(void);
extern bool multi_checkpoint(void);

int main(void)
{	std::string group = "test_more/cppad_for_tmb";
	size_t      width = 30;
	CppAD::test_boolofvoid Run(group, width);

	// This line is used by test_one.sh

	Run( implicit_ctor,            "implicit_ctor"          );
	Run( prefer_reverse,           "prefer_reverse"         );
	Run( multi_atomic,             "multi_atomic"           );
	Run( multi_checkpoint,         "multi_checkpoint"       );

	// check for memory leak
	bool memory_ok = CppAD::thread_alloc::free_all();
	// print summary at end
	bool ok  = Run.summary(memory_ok);
	//
	return static_cast<int>( ! ok );
}
