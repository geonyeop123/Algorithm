"use strict";

function radixLSD(array, d) {
  let counter = [];
  let mod = 1;
  for (let i = 0; i < d; i++, mod *= 10) {
    for (let j = 0; j < array.length; j++) {
      let bucket = parseInt(array[j] / mod) % 10;
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(array[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j] != null) {
        while (counter[j][0] != null) {
          value = counter[j].shift();
          array[pos++] = value;
        }
      }
    }
  }
  return array;
}

console.log(radixLSD([125, 383, 274, 96, 14, 349, 0, 0, 9, 81, 72], 3));
