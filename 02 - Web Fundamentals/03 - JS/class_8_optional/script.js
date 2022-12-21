let currentNumber = "";
let lastNumber = "";
let operator = "";

const updateResult = number => document.querySelector("#display").innerHTML = number;

const press = (number) => {
  currentNumber += number;
  updateResult(currentNumber);
}

const setOP = (newOperator) => {
  if(lastNumber && currentNumber) {
    calculate();
  } else if(currentNumber) {
    lastNumber = currentNumber;
    currentNumber = ""; 
  }
  operator = newOperator;
}

const calculate = () => {
  let result = 0;
  const a = parseFloat(lastNumber);
  const b = parseFloat(currentNumber);

  if(!a || !b) return;

  switch(operator){
    case "+": 
      result = a + b;
      break;
    case "-": 
      result = a - b;
      break;
    case "*": 
      result = a * b;
      break;
    case "/": 
      result = a / b;
      break;
  }
  operator = "";
  lastNumber = result;
  currentNumber = "";
  updateResult(result);
}

const clr = () => {
  currentNumber = "";
  lastNumber = "";
  operator = "";
  updateResult("0");
}