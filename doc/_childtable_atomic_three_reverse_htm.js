// Child table for section atomic_three_reverse
document.write('\
<select onchange="atomic_three_reverse_child(this)">\
<option>atomic_three_reverse-&gt;</option>\
<option>atomic_three_reverse.cpp</option>\
</select>\
');
function atomic_three_reverse_child(item)
{	var child_list = [
		'atomic_three_reverse.cpp.htm'
	];
	var index = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = child_list[index-1];
}
