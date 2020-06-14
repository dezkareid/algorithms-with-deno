export function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const testArray = [7, 3, 3, 5, 981, 1, 0];

export const sortedTestArray = [0, 1, 3, 3, 5, 7, 981];