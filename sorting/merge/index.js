function merge(leftArray, rightArray) {
  let result = []
	while(leftArray.length && rightArray.length) {
		if (leftArray[0] < rightArray[0])
			result.push(leftArray.shift())
		else
      result.push(rightArray.shift())
  }
	result = result.concat(leftArray);
  return result.concat(rightArray);
}

function mergeSort(array) {
  const { length } = array;
    if(length <= 1){
      return array;
    }
	const middle = Math.floor(length / 2);
	const leftArray = array.slice(0, middle);
	const rightArray = array.slice(middle, length);
	const leftArrayMerged = mergeSort(leftArray);
  const rightArrayMerged = mergeSort(rightArray);
	return merge (leftArrayMerged, rightArrayMerged)
}

export default mergeSort;
