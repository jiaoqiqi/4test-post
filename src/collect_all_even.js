
function collect_same_elements(collection_a, object_b) {
	var result = [];
	n = 0 ; 
	var value = B.value;
	for(var i = 0 ; i<A.length ; i++)
	{
		for(var j = 0 ; j<value.length ; j++)
		{
			if(A[i].key === value[j])
			{
				result[n]=A[i].key;
				n++;
			}
		}

	}
	return result;
 
}

module.exports = collect_same_elements;
