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
'numeric_ad.htm',
'benderquad.htm'
];
var list_current0 = [
'benderquad.htm#Syntax',
'benderquad.htm#See Also',
'benderquad.htm#Problem',
'benderquad.htm#Purpose',
'benderquad.htm#x',
'benderquad.htm#y',
'benderquad.htm#fun',
'benderquad.htm#fun.fun.f',
'benderquad.htm#fun.fun.h',
'benderquad.htm#fun.fun.dy',
'benderquad.htm#g',
'benderquad.htm#gx',
'benderquad.htm#gxx',
'benderquad.htm#BAvector',
'benderquad.htm#ADvector',
'benderquad.htm#Example'
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
