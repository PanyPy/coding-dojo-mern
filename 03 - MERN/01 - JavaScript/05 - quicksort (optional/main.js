 // ------- Helpers ------- //
// swap between 2 index
const swap = (array, index, targetIndex) => {
  const temp = array[index];
  array[index] = array[targetIndex];
  array[targetIndex] = temp;
}

// using ES6
// const index = array.findIndex((element) => element > pivot);
// return index !== -1 ? index : array.length-1;
// get the first bigger value index
const left_helper = (array, pivot) => {
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] > pivot){
      return i;
    }
  }
  return array.length-1;
}

// using ES6
// const index = array.findLastIndex((element) => element < pivot);
// return index !== -1 ? index : 0;
// get the last minor value index
const right_helper = (array, pivot) => {
  for (let i = array.length; i > 0; i--) {
    if (array[i] < pivot){
      return i;
    }
  }
  return 0;
}


const quick_sort = (array) => {
  // initial values
  let leftIndex = 0;
  let rightIndex= array.length-1;
  let pivot = Math.floor(array.length/2);

  while(leftIndex+1 !== rightIndex) {
    // split array in the middle
    const leftArray = array.slice(0, pivot);
    const rightArray = array.slice(pivot, array.length);
    // get the first left index with the value > than pivot (middle number)
    leftIndex = left_helper(leftArray, array[pivot]);
    // get the last rigth index with the value < than pivot (middle number)
    rightIndex = right_helper(rightArray, array[pivot]) + pivot;

    if(leftIndex+1 < pivot && rightIndex > pivot) { // if leftIndex and rightIndex are not sorted
      swap(array, leftIndex, rightIndex);
    } else if (leftIndex+1 < pivot){ // if leftIndex is not sorted
      swap(array, leftIndex, pivot);
    } else {
      swap(array, rightIndex, pivot); // if rightIndex is not sorted
    }
  }

  if(pivot > 0) {
    const leftSide = quick_sort(array.slice(0, pivot));
    const rightSide = quick_sort(array.slice(pivot, array.length));
    return leftSide.concat(rightSide);
  }
  return array; 
}

// Run
let unsorted_array = [1, 1, 45, 6, 8,  11, 21, 11, 17];
let result = quick_sort(unsorted_array);
console.log('result', result);

unsorted_array = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30];
result = quick_sort(unsorted_array);
console.log('result', result);
