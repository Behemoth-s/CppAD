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
'luratio.htm'
];
var list_current0 = [
'luratio.htm#Syntax',
'luratio.htm#Description',
'luratio.htm#Include',
'luratio.htm#Matrix Storage',
'luratio.htm#sign',
'luratio.htm#ip',
'luratio.htm#jp',
'luratio.htm#LU',
'luratio.htm#LU.A',
'luratio.htm#LU.P',
'luratio.htm#LU.L',
'luratio.htm#LU.U',
'luratio.htm#LU.Factor',
'luratio.htm#LU.Determinant',
'luratio.htm#ratio',
'luratio.htm#ratio.Purpose',
'luratio.htm#SizeVector',
'luratio.htm#ADvector',
'luratio.htm#Example'
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
