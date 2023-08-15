const printMessage = number => {
  message = "";
  if(number % 3 == 0) message+= "Fizz";
  if(number % 5 == 0) message+= "Buzz";

  (message !== "") ? console.log(message) : console.log(number);
};

[...Array(15).keys()].forEach(number => printMessage(number+1));