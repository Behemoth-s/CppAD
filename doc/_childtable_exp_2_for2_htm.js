// Child table for section exp_2_for2
document.write('\
<select onchange="exp_2_for2_child(this)">\
<option>exp_2_for2-&gt;</option>\
<option>exp_2_for2.cpp</option>\
</select>\
');
function exp_2_for2_child(item)
{	var child_list = [
		'exp_2_for2.cpp.htm'
	];
	var index = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = child_list[index-1];
}
