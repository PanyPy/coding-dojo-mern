// 01 - replace big numbers
const makeItBig = numbers => {
  return numbers.map(number => number > 0 ? "big" : number);
}
console.log(makeItBig([-1, 3, 5, -5]));

// 02 - print smalles, return biggest
const todo2 = numbers => {
  const sortedNumber = numbers.sort();
  console.log("smallest " + sortedNumber[numbers.length-1]);
  return sortedNumber[0];
}
console.log("biggest " + todo2([11,2,3,44,5]));

// 03 - print penultimate and return first
const todo3 = numbers => {
  console.log("penultimate " + numbers[numbers.length-2]);
  return numbers.find(number => number%2 !== 0);
}
console.log(todo3([112,2,3,44,5]));

// 04 - duplicate
const duplicate = numbers => {
  return numbers.map(number => number*2);
}
console.log("duplicated " + duplicate([11,2,3,44,5]));

// 05 - counting positives
const todo5 = numbers => {
  const positives = numbers.filter(number => number > 0).reduce((a, b) => a + b);
  numbers[numbers.length -1] = positives;
}
const numbers = [11,2,3,44,5];
console.log("old values " + numbers);
todo5(numbers);
console.log("new values " + numbers);

// 06 - even and odd numbers
const evenAndOdd = numbers => {
  let evenCount = 0;
  let oddCount = 0;
  numbers.forEach(number => {
    if(number %2 === 0) {
      evenCount++;
      oddCount = 0;
      if(evenCount >= 3) console.log("Strange!");
    } else {
      oddCount++;
      evenCount = 0;
      if(oddCount >= 3) console.log("Even more!");
    }
  })
}
evenAndOdd([1,4,3,5,7,5,6,70,8,4]);

// 07 - increment odds
const addOneToOdds = numbers => {
  const newNumbers = numbers.map(number => number%2 === 0 ? number : number+1);
  newNumbers.forEach(number => console.log(number));

  return newNumbers;
}
addOneToOdds([1,2,34,5,6]);

// 08 - replace chars by length
const beforeValues = numbers => {
  return numbers.map((number, index) => 
    (index > 0) ? numbers[index-1].length : number)
}
console.log(beforeValues(["asd","ddasdasd","das","aasd"]));

// 09 - add 7
const todo9 = numbers => {
  return numbers.map((number, index) => 
    (index > 0) ? number+7 : number)
}
console.log(todo9([1,2,3,4,5]));

// 10 - inverse array
const inverse = numbers => {
  const arrayCopy = [...numbers];
  for(let i=0; i<numbers.length; i++){
    numbers[i] = arrayCopy[numbers.length-i-1];
  }
  return numbers;
}

console.log(inverse([1,2,3,4,5]));

// 11 - negatives
const negatives = numbers => {
  return numbers.map(number => Math.abs(number)*-1);
}
console.log(negatives([1,2,-3,4,5]));

// 12 - always hungry
const alwaysHungry = words => {
  const foodCound = words.filter(word => word == "food").length;
  if(foodCound > 0) {
    words.forEach(word => {
      console.log(word == "food" ? "delicious" : word);
    })
  } else {
    console.log("I'm hungry");
  }
}
alwaysHungry(["food", "asd", "food"]);
alwaysHungry(["ddcomida", "asd", "asda"]);

// 13 - interchange
const interchange = array => {
  const arrayCopy = [...array];
  for(let i=0; i<array.length; i += 2) {
    array[i] = arrayCopy[array.length-i-1];
  }
  return array;
}
console.log(interchange([true, 42, "Ada", 2, "pizza"]))

// 14 - multiply array
const multiply = (array, number) => {
  return array.map(value => value*number);
}
console.log(multiply([1,2,3,4], 3));