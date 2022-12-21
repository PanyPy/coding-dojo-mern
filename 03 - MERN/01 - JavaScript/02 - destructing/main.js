const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)      // logs Tesla
console.log(otherRandomCar) // logs Mercedes


const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);        // name is not defined
console.log(otherName);   //


const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);        //logs 12345
console.log(hashedPassword);  //logs undefined


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second); //log false
console.log(first == third); //log true




