// 01 - swap
let myNumber = 42;
let myName = "Pany Diaz";

//swap
let temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myNumber) // 42
console.log(myName) // Pany Diaz

// 02 - print
for(let i=-52; i<=1066; i++){
  console.log(i);
}

// 03 - beCheerful
const beCheerful = () => console.log("Good morning!");
[...Array(98)].forEach(() => {
  beCheerful()
});

// 04 - multiples of 3. from -300 a 0. Skip -3, -6. 
const skipNumber = [-3, -6];
for(let i = -300; i <= 0; i += 3){
  if(!skipNumber.includes(i)) console.log(i);
}

// 05 - While
index = 2000;
while(index <= 4280) console.log(index++);

// 06 - Guess my BD
const day = prompt("Enter Day", 0);
const month = prompt("Enter Month", 0);
const bDay = [21,12];

if(bDay.includes(day) && bDay.includes(month)) {
  console.log("How did you know?");
} else {
  console.log("Just another day..");
}

// 07 - Leap Year
const isLeapYear = (year) => {
  if(year % 400 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("It's a leap year")
  } else {
    console.log("It's NOT a leap year")
  }
}

// 08 - Print and Count
let count = 0;
for(let i=5; i<=512; i++){
  console.log(i);
  count++;
}
console.log("count = " + count);

// 09 - Multiples of 6
index = 6;
while (index <= 6000) {
  if(index % 6 === 0) {
    console.log(index)
  };
  index++
}

// 10 - Count
for(let i=1; i<=100; i++){
  if(i%10 === 0 && i%5 === 0) {
    console.log("Coding Dojo");
  } else if(i%5 === 0) {
    console.log("Coding");
  } else
    console.log(i);
}

// 11 = Print
const print = incoming => console.log(incoming);

// sum of even numbers between -300.000 and 300.000
let sum = 0;
for(let i=-300000; i<=300000; i++) {
  if(i%2 === 0) sum += i;
}
console.log("The sum is " + sum);

countdown
let index = 2016;
while(index>0) {
  console.log(index--);
}

// countdown each 5
let lowNum = 2;
let highNum = 9;
let mult = 3;

for(let i=highNum; i>=lowNum; i--){
  if(i%mult === 0) console.log(i)
}

//final countdown
const finalCountdown = (p1, p2, p3, p4) => {
  for(let i=p2; i<=p3; i++){
    if(i%p1 === 0) i !== p4 && console.log(i);
  }
}
finalCountdown(3, 5, 17, 9)