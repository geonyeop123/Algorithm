function selectionSort(array) {
  let i, j, temp, minIndex;
  for (i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(selectionSort([4, 1, 5, 8, 3, 2, 6, 7])); // [1,2,3,4,5,6,7,8]
