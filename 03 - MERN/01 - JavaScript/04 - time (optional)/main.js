// Given this function, improve the performance.
// Number.prototype.isPrime_deprecated = function() {
//   for( let i=2; i<this; i++ ) {
//     if( this % i === 0 ) {
//       return false;
//     }
//   }
//   return true;
// }
Number.prototype.isPrime = function() {
  for( let i=2; i<=Math.sqrt(this); i++ ) {
    if( this % i === 0 ) {
      return false;
    }
  }
  return true;
}

// you can test with `isPrime` or `isPrimeOld` to see the differences
const { performance } = require('perf_hooks');
const first = performance.now();
let primeCount = 0;
let num = 2; // for math purposes, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
      primeCount++;
    }
  num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - first} milliseconds to run`);
// original - isPrimeDeprecated
// The 10,000th prime number is 104729
// This took 40908.54530400038 milliseconds to run
// new version - isPrime
// The 10,000th prime number is 104729
// This took 270.85449600219727 milliseconds to run

// The 100,000th prime number is 1299709
// This took 9019.49804700911 milliseconds to run
// The 1,000,000th prime number is 15485863
// This took 292170.93952199817 milliseconds to run


// Given this function, improve the performance.
// recursive Fibonacci
function rFib( n ) {
    if ( n < 2 ) {
      return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
  }
// const { performance } = require('perf_hooks');
const second = performance.now();
rFib(20);
console.log(`recursive fib took ${performance.now() - second} milliseconds to run`);
// recursive fib took 9.575433000922203 milliseconds to run

// iterative Fibonacci - FASTER
function iFib( n ) {
  const vals = [ 0, 1 ];
  while(vals.length-1 < n) {
    let len = vals.length;
    vals.push( vals[len-1] + vals[len-2] );
  }
  return vals[n];
}
iFib(20);
  

// const { performance } = require('perf_hooks');
const third = performance.now();
iFib(20);
console.log(`iterative fib took ${performance.now() - third} milliseconds to run`);
// iterative fib took 0.030625998973846436 milliseconds to run


const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");

// const { performance } = require('perf_hooks');
const start = performance.now();
let reversed = "";
for (let i = story.length - 1; i >= 0; i--) { 
  reversed += story[i];
}
console.log(`reverse took ${performance.now() - start} milliseconds to run`);
// reverse took 7.740783005952835 milliseconds to run -> using reversed1 (uncomment)
// reverse took 0.686938002705574 milliseconds to run -> using reversed

