// helper
const removeAt = (array, position) => {
  for(let i=0; i<array.length-1; i++) {
    if(i>=position) array[i] = array[i+1];
  }
  array.pop();
  return array;
}

// 01 - revert
const reverse = array => {
  for(let i=0; i<array.length/2; i++){
    const inversePosition = array.length-i-1;
    const swap = array[i];
    array[i] = array[inversePosition];
    array[inversePosition] = swap;
  }
  return array;
}
console.log(reverse([1,2,3,4,5]));

const rotateArr = (arr, shiftBy) => {
  let currentShifts = 0;
  while(shiftBy > currentShifts) {
    for(let i=0; i<arr.length-1; i++) {
      const temp = arr[i];
      arr[i] = arr[i+1]
      arr[i+1] = temp;
    }
    currentShifts++;
  }
  return arr;
}
console.log(rotateArr([1,2,3,4], 2));

const rotateArrL = (arr, shiftBy) => {
  let currentShifts = 0;
  while(shiftBy > currentShifts) {
    for(let i=arr.length-1; i>0; i--) {
      const temp = arr[i];
      arr[i] = arr[i-1]
      arr[i-1] = temp;
    }
    currentShifts++;
  }
  return arr;
}
console.log(rotateArrL([1,2,3,4], 2));

const filter = (arr, min, max) => {
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] > min && arr[i] < max) {
      arr[i] = undefined;
    }
  }
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] == undefined) {
      removeAt(arr, i--);
    }
  }
  return arr;
}
console.log(filter([1,2,3,4,5], 2, 5));

const concat = (arr1, arr2) => {
  const newArray = [];
  for(let i=0; i<arr1.length; i++){
    newArray.push(arr1[i]);
  }
  for(let i=0; i<arr2.length; i++){
    newArray.push(arr2[i]);
  }
  return newArray
}
console.log(concat([1,2], [3,4]));

