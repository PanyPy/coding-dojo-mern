// 01 - push
const pushFront = (numbers, pushedNumber) => {
  for(let i=numbers.length; i>0; i--){
    numbers[i] = numbers[i-1];
  }
  numbers[0] = pushedNumber;

  return numbers;
}

// 03 - insertAt
const removeAt = (array, position) => {
  for(let i=0; i<array.length-1; i++) {
    if(i>=position) array[i] = array[i+1];
  }
  array.pop();
  return array;
}

// move min to front - easy reusing functions
const minToFront = array => {
  let min = array[0];
  let minPosition = 0;
  for(let i=0; i<array.length; i++) {
    if(min > array[i]) {
      min = array[i];
      minPosition = i;
    }
  }

  removeAt(array, minPosition);
  return pushFront(array, min);
}
console.log(minToFront([4,2,1,3,5]));


