import { swap } from '../common.js';

function partition(array, left, right) {
 	const middle = Math.floor((left + right) / 2);
	const pivot = array[middle];
	let leftIndex = left;
	let rightIndex = right
	while (leftIndex <= rightIndex) {
		while (array[leftIndex] < pivot) {
			leftIndex++;
		}
		while (array[rightIndex] > pivot) {
			rightIndex--;
		}

		if (leftIndex <= rightIndex) {
			swap(array, leftIndex, rightIndex)
			leftIndex++;
			rightIndex--;
		}	
	}
	return leftIndex
}

function quicksort(array, left, right) {
	if (left >= right) {
    return;
  }
	const index = partition(array, left, right);
	quicksort(array, left, index - 1);
	quicksort(array, index, right);
  return array;
}

export default quicksort;
