var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'appendix.htm',
'deprecated.htm',
'atomic_two_example.htm',
'atomic_two_eigen_cholesky.cpp.htm',
'atomic_eigen_cholesky.hpp.htm'
];
var list_current0 = [
'atomic_eigen_cholesky.hpp.htm#Purpose',
'atomic_eigen_cholesky.hpp.htm#Start Class Definition',
'atomic_eigen_cholesky.hpp.htm#Public',
'atomic_eigen_cholesky.hpp.htm#Public.Types',
'atomic_eigen_cholesky.hpp.htm#Public.Constructor',
'atomic_eigen_cholesky.hpp.htm#Public.op',
'atomic_eigen_cholesky.hpp.htm#Private',
'atomic_eigen_cholesky.hpp.htm#Private.Variables',
'atomic_eigen_cholesky.hpp.htm#Private.forward',
'atomic_eigen_cholesky.hpp.htm#Private.reverse',
'atomic_eigen_cholesky.hpp.htm#End Class Definition'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down3(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down3[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}
