import { swap } from '../common.js';

function insertionSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for(let j = i; j > 0; j-- ) {
      if (array[j] < array[j-1]) {
        swap(array, j, j-1);
      }
    }
  }
  return array;
}

export default insertionSort;
