// 01 - push
const pushFront = (numbers, pushedNumber) => {
  for(let i=numbers.length; i>0; i--){
    numbers[i] = numbers[i-1];
  }
  numbers[0] = pushedNumber;

  return numbers;
}
console.log(pushFront([1,2,3,4], 100));

// 02 - pop and push
const popFront = numbers => {
  const poped = numbers.pop();
  return pushFront(numbers, poped);
}
console.log(popFront([1,2,3,4]));

// 03 - insertAt
const insertAt = (array, position, value) => {
  for(let i=array.length; i>=0; i--) {
    if(i>position) array[i] = array[i-1];
    if(i==position) array[i] = value;
    else array[i] = array[i];
  }
  return array;
}
console.log(insertAt([1,2,3,4], 1, 100));

// 03 - insertAt
const removeAt = (array, position) => {
  for(let i=0; i<array.length-1; i++) {
    // if(i<position) array[i] = array[i-1];
    if(i>=position) array[i] = array[i+1];
    // else array[i] = array[i];
  }
  array.pop();
  return array;
}
console.log(removeAt([1,2,3,4], 0));

// 04 - interchange
const evenInterchange = numbers =>{
  if(numbers.length < 2) return numbers;

  const lastIndex = numbers.length%2 === 0 ? numbers.length : numbers.length-1;
  for(let i=0; i<lastIndex; i+=2) {
    const temp = numbers[i];
    numbers[i] = numbers[i+1];
    numbers[i+1] = temp;
  }
  return numbers;
}

console.log(evenInterchange([1,2,3,45]));

// 05 - removeDuplicated
const removeDuplicated = numbers =>{
  let valueToCheck = numbers[0];
  const result = [];

  for(let i=1; i<numbers.length+1; i++) {
    if(numbers[i] !== valueToCheck) {
      result.push(valueToCheck);
      valueToCheck = numbers[i];
    }
  }
  return result;
}

console.log(removeDuplicated(["1","2","2","3","3","3","45", "46"]));