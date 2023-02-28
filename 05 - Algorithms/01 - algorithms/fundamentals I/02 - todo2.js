// 01 - countdown
const todo1 = (number) => {
  const array = [];
  for(let i=number; i>=0; i--){
    array.push(i);
  }
  return array
}
console.log(todo1(4).length);

// 02 - print and return
const todo2 = (numbers) => {
  console.log("printed " +numbers[0]);
  return numbers[1];
}
console.log("returned " + todo2([0,1]));

// 03 - print bigger values and return count;
const todo3 = (numbers) => {
  const biggers = numbers.filter(number => number > numbers[1]);
  console.log("printed " + biggers);
  return biggers.length;
}
console.log("returned " + todo3([1,3,5,7,9,13]));

// 04
const todo4 = (numbers) => {
  if(numbers.length < 2) return [];
  const biggers = numbers.filter(number => number > numbers[1]);
  console.log("printed " + biggers);
  return biggers.length;
}
console.log("returned " + todo4([1,3,5,7,9,13]));

// use num1 as lenght and num2 as value
const todo5 = (number1, number2) => {
  if(number1 === number2) console.log("Jinx!");
  return Array(number1).fill(number2);
}
console.log(todo5(2,5));

// convert to celsius
const fahrenheitToCelsius = fDegrees => {
  return (9/5*fDegrees)+32;
}
console.log(fahrenheitToCelsius(100));

// convert to fahrenheit
const celsiusToFahrenheit = cDegrees => {
  return (cDegrees-32)*5/9;
}
console.log(celsiusToFahrenheit(212));

