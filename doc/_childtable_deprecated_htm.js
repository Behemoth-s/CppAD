// Child table for section deprecated
document.write('\
<select onchange="deprecated_child(this)">\
<option>deprecated-&gt;</option>\
<option>include_deprecated</option>\
<option>FunDeprecated</option>\
<option>CompareChange</option>\
<option>omp_max_thread</option>\
<option>TrackNewDel</option>\
<option>omp_alloc</option>\
<option>memory_leak</option>\
<option>epsilon</option>\
<option>test_vector</option>\
<option>cppad_ipopt_nlp</option>\
<option>atomic_one</option>\
<option>atomic_two</option>\
<option>atomic_two_example</option>\
<option>chkpoint_one</option>\
<option>zdouble</option>\
<option>autotools</option>\
</select>\
');
function deprecated_child(item)
{	var child_list = [
		'include_deprecated.htm',
		'fundeprecated.htm',
		'comparechange.htm',
		'omp_max_thread.htm',
		'tracknewdel.htm',
		'omp_alloc.htm',
		'memory_leak.htm',
		'epsilon.htm',
		'test_vector.htm',
		'cppad_ipopt_nlp.htm',
		'atomic_one.htm',
		'atomic_two.htm',
		'atomic_two_example.htm',
		'chkpoint_one.htm',
		'zdouble.htm',
		'autotools.htm'
	];
	var index = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = child_list[index-1];
}
