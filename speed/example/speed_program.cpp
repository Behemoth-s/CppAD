/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-16 Bradley M. Bell

CppAD is distributed under the terms of the
             Eclipse Public License Version 2.0.

This Source Code may also be made available under the following
Secondary License when the conditions for such availability set forth
in the Eclipse Public License, Version 2.0 are satisfied:
           GNU General Public License, Version 3.0.
---------------------------------------------------------------------------- */
/*
$begin speed_program.cpp$$
$spell
	speed_program.exe
	cppad.hpp
	Microsoft
	namespace
	std
	const
	cout
	ctime
	ifdef
	const
	endif
	cpp
$$


$section Example Use of SpeedTest$$
$mindex test speed$$

$head Running This Program$$
On a Unix system that includes the $code g++$$ compiler,
you can compile and run this program by changing into the
$code speed/example$$ directory and executing the following commands
$codep
	g++ -I../.. speed_program.cpp -o speed_program.exe
	./speed_program.exe
$$

$head Program$$
$srccode%cpp% */
# include <cppad/utility/speed_test.hpp>

std::string Test(size_t size, size_t repeat)
{	// setup
	double *a = new double[size];
	double *b = new double[size];
	double *c = new double[size];
	size_t i  = size;;
	while(i)
	{	--i;
		a[i] = i;
		b[i] = 2 * i;
	}
	// operations we are timing
	while(repeat--)
	{	i = size;;
		while(i)
		{	--i;
			c[i] = a[i] + b[i];
		}
	}
	// teardown
	delete [] a;
	delete [] b;
	delete [] c;

	// return a test name that is valid for all sizes and repeats
	return "double: c[*] = a[*] + b[*]";
}
int main(void)
{
	CppAD::SpeedTest(Test, 10, 10, 100);
	return 0;
}

/* %$$

$head Output$$
Executing of the program above generated the following output
(the rates will be different for each particular system):
$codep
	double: c[*] = a[*] + b[*]
	size = 10  rate = 14,122,236
	size = 20  rate = 7,157,515
	size = 30  rate = 4,972,500
	size = 40  rate = 3,887,214
	size = 50  rate = 3,123,086
	size = 60  rate = 2,685,214
	size = 70  rate = 2,314,737
	size = 80  rate = 2,032,124
	size = 90  rate = 1,814,145
	size = 100 rate = 1,657,828
$$

$end
*/
