//1. Print odd numbers from 1-20.
for (let i = 1; i<=20; i++) {
  if(i%2 !== 0) console.log(i)
}

// 2. Print multples from 3 from 100-0.
for (let i = 100; i>-0; i--) {
  if(i%3 === 0) console.log(i);
}

// 3. Print values in this sequence  4, 2.5, 1, -0.5, -2, -3.5.
// 4, 2.5, 1, -0.5, -2, -3.5.
for(let i =4; i>=-3.5; i-=1.5) {
  console.log(i);
}

// 4. Sum values from 1-100 and print the result
// 1 + 2 + 3 + ... + 98 + 99 + 100 must return 5050.
let sum = 0;
for(let i =1; i<=100; i++) {
  sum+=i;
}
console.log(sum)

// 5. Print the factorial, multiply the values from 1 al 12 (using a variable producty).
// 1 * 2 * 3 * ... * 10 * 11 * 12 must return  479001600.
let producty = 1;
for(let i=1; i<=12; i++) {
  producty*=i;
}
console.log(producty);