"use strict";
function countingSort(array, k) {
  let i, j;
  let count = [];
  let result = [];
  for (i = 0; i <= k; i++) {
    count.push(0);
  }
  console.log(count);
  for (j = 0; j < array.length; j++) {
    count[array[j]] += 1;
  }
  console.log(count);
  for (i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }
  console.log(count);
  for (j = 0; j < array.length; j++) {
    console.log(array[j], count[array[j]] - 1);
    result[count[array[j]] - 1] = array[j];
    count[array[j]] -= 1;
  }
  console.log(result);
}

countingSort([1, 1, 1, 1, 1, 1, 1, 1, 1], 1);
