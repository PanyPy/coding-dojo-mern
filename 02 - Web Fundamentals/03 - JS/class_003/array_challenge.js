// 1. Always hungry
// Write a function. Given an array, iterate over it and print "delicious" each time the value is "food"
// if "food is not present in the array, print "I'm hundry" once.
function alwaysHungry(arr) {
  const food_array = arr.filter(element => element === "food");
  if(food_array.length === 0) {
    console.log("I'm hungry");
    return;
  }
  food_array.forEach(element => {
    console.log("Delicious");
  });
}

alwaysHungry([3.14, "food", "pastel", true, "food"]);
// esto debería mostrar "delicioso", "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


// 2. Filter values
// Given an array and a "cutoff" value, return a new array with the values greater than "cutoff".
function highPass(arr, cutoff) {
  return arr.filter(element => element > cutoff);
}

console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5)); // expects [6, 8, 10, 9]


// 3. Better than average
// Given an array of numbers, return the count of the numbers greater than the average.
function betterThanAverage(arr) {
  const sum = arr.reduce((a,b) => a+b);
  const average = sum/arr.length;

  return arr.filter(element => element > average).length;
}
console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9])); // expects 4 as result

// 4. Inverted array
// it could be as easy as
// return arr.reverse()
function reverse(arr) {
  const reversedArray = []
  for(let i = arr.length-1; i>=0; i--){
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

console.log(reverse(["a", "b", "c", "d", "e"])); // expects ["e", "d", "c", "b", "a"]

// 5. Array of Fibonacci's
// Return an array of fibonacci's with `n` as length.
// Fibonacci's number are composed by the sum of the last 2 elements of the sequence.
function fibonacciArray(n) {
  const fibArr = [0, 1];
  while (fibArr.length < 10) {
    const newValue = fibArr[(fibArr.length-1)] + fibArr[(fibArr.length-2)];
    fibArr.push(newValue);
  }
  return fibArr;
}

console.log(fibonacciArray(10)); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
