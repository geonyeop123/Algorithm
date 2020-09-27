"use strict";

const insertionSort = function (array) {
  let i = 1,
    j,
    temp;
  for (i; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

const beforeArray = [5, 6, 1, 2, 3, 4];
const afterArray = insertionSort(beforeArray);

console.log(afterArray);
