import { swap } from '../common.js';
function selectionSort(array) {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for(let j = i + 1; j < length; j++ ) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    swap(array, i, min);
  }
  return array;
}

export default selectionSort;