var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'utility.htm',
'rosen34.htm'
];
var list_current0 = [
'rosen34.htm#Syntax',
'rosen34.htm#Description',
'rosen34.htm#Include',
'rosen34.htm#xf',
'rosen34.htm#Fun',
'rosen34.htm#Fun.t',
'rosen34.htm#Fun.x',
'rosen34.htm#Fun.f',
'rosen34.htm#Fun.f_t',
'rosen34.htm#Fun.f_x',
'rosen34.htm#Fun.Nan',
'rosen34.htm#Fun.Warning',
'rosen34.htm#Fun.Optimization',
'rosen34.htm#M',
'rosen34.htm#ti',
'rosen34.htm#tf',
'rosen34.htm#xi',
'rosen34.htm#e',
'rosen34.htm#Scalar',
'rosen34.htm#Vector',
'rosen34.htm#Parallel Mode',
'rosen34.htm#Example',
'rosen34.htm#Source Code'
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
