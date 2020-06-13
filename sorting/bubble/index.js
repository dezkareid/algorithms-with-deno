import { swap } from '../common.js';
function bubbleSort(array) {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    for(let j = i + 1; j < length; j++ ) {
      if (array[i] > array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

export default bubbleSort;
