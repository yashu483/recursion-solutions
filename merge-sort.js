"use strict";

const mergeArr = [3, 2, 1, 13, 8, 5, 0, 1];
const mergeArr2 = [105, 79, 100, 110];
const mergeArr3 = [2, 1];
let iterationCount = 0;
console.log(`Instructions : 
    You have arrays :
     mergeArr = [3, 2, 1, 13, 8, 5, 0, 1];
     mergeArr2 = [105, 79, 100, 110];
     mergeArr3 = [2, 1];
     
     you can use iterationCount to check how many iterations function is making. After each use of mergeSort(arr) you have to reset iterationCount to 0.
     
     You are ready to use mergeSort(array)`);

const mergeSort = function mergeSort(arr) {
  iterationCount++;
  console.log(iterationCount);
  function returnMin(arr1, arr2) {
    iterationCount++;
    console.log(iterationCount);
    if (arr1.length === 0 || arr2.length == 0) {
      return arr1.length === 0 ? arr2 : arr1;
    } else {
      const tempArr = [];
      if (arr1[0] < arr2[0]) {
        const newOne = arr1.shift();
        tempArr.push(newOne);
      } else {
        const newOne = arr2.shift();
        tempArr.push(newOne);
      }
      tempArr.push(returnMin(arr1, arr2));
      return tempArr.flat();
    }
  }

  if (arr.length === 1) {
    return arr;
  } else {
    let halfLength = arr.length / 2;
    if (!Number.isInteger(halfLength)) {
      halfLength -= 0.5;
    }
    let firstHalf = arr.splice(0, halfLength);
    let secondHalf = arr;
    let sortedFirst = mergeSort(firstHalf);
    let sortedSecond = mergeSort(secondHalf);
    let sortedArr = [];
    sortedArr = returnMin(sortedFirst, sortedSecond);
    return sortedArr;
  }
};
