"use strict";

const fibs = function fibs(num) {
  if (num === 0) return [0];
  let first = 0;
  let next = 1;
  let sum = 0;
  let arr = [];
  arr.push(first, next);

  for (let i = 2; i < num; i++) {
    sum = first + next;
    first = next;
    next = sum;
    arr.push(sum);
  }

  return arr;
};

const fibsRec = function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) {
    return [0, 1];
  } else if (num > 2) {
    let arr = fibsRec(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

const fibsRecc = function fibsRecc(num) {
  if (num <= 0) return "Not applicable";
  else if (num === 1) return [0];
  else if (num === 2) {
    return [0, 1];
  } else if (num > 2) {
    let arr = fibsRecc(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};
