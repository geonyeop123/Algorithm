"use strict";

const mergeSort = (array) => {
  if (array.length < 2) return array;
  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

console.log(mergeSort([5, 2, 4, 7, 6, 1, 3, 8]));
