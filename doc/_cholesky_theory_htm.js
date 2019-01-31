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
'cholesky_theory.htm'
];
var list_current0 = [
'cholesky_theory.htm#Reference',
'cholesky_theory.htm#Notation',
'cholesky_theory.htm#Notation.Cholesky Factor',
'cholesky_theory.htm#Notation.Taylor Coefficient',
'cholesky_theory.htm#Notation.Lower Triangular Part',
'cholesky_theory.htm#Forward Mode',
'cholesky_theory.htm#Lemma 1',
'cholesky_theory.htm#Lemma 1.Proof',
'cholesky_theory.htm#Lemma 2',
'cholesky_theory.htm#Reverse Mode',
'cholesky_theory.htm#Reverse Mode.Case k = 0',
'cholesky_theory.htm#Reverse Mode.Case k &gt; 0'
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
