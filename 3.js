function firstNumber (a) { 
  
}

function firstNumber (a) {
   return function secondNumber (b) {
             const sum = a + b;
             return sum;
  }
}


console.log(firstNumber(1)(5))