
function collect_same_elements(collection_a, object_b) {
	var result = [];
	n = 0 ; 
	var value = object_b.value;
	for(var i = 0 ; i<collection_a.length ; i++)
	{
		for(var j = 0 ; j<value.length ; j++)
		{
			if(collection_a[i].key === value[j])
			{
				result[n]=collection_a[i].key;
				n++;
			}
		}

	}
	return result;
 
}

module.exports = collect_same_elements;
