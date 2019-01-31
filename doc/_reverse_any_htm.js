var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad.htm',
'adfun.htm',
'reverse.htm',
'reverse_any.htm'
];
var list_current0 = [
'reverse_any.htm#Syntax',
'reverse_any.htm#Purpose',
'reverse_any.htm#Notation',
'reverse_any.htm#Notation.u^(k)',
'reverse_any.htm#Notation.X(t, u)',
'reverse_any.htm#Notation.Y(t, u)',
'reverse_any.htm#Notation.w^(k)',
'reverse_any.htm#Notation.W(u)',
'reverse_any.htm#f',
'reverse_any.htm#q',
'reverse_any.htm#w',
'reverse_any.htm#dw',
'reverse_any.htm#First Order',
'reverse_any.htm#Second Order',
'reverse_any.htm#Vector',
'reverse_any.htm#Example'
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
