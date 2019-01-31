var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'ad.htm',
'advalued.htm',
'atomic.htm',
'atomic_three_example.htm',
'atomic_three_norm_sq.cpp.htm'
];
var list_current0 = [
'atomic_three_norm_sq.cpp.htm#Function',
'atomic_three_norm_sq.cpp.htm#Start Class Definition',
'atomic_three_norm_sq.cpp.htm#Constructor',
'atomic_three_norm_sq.cpp.htm#for_type',
'atomic_three_norm_sq.cpp.htm#forward',
'atomic_three_norm_sq.cpp.htm#reverse',
'atomic_three_norm_sq.cpp.htm#jac_sparsity',
'atomic_three_norm_sq.cpp.htm#hes_sparsity',
'atomic_three_norm_sq.cpp.htm#End Class Definition',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function.Constructor',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function.Recording',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function.forward',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function.reverse',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function.rev_jac_sparsity',
'atomic_three_norm_sq.cpp.htm#Use Atomic Function.for_hes_sparsity'
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
