//program to perform simple maths
const prompt = require('prompt-sync')();


console.log("1. addition");
console.log("2.subtraction");
console.log("3.multiplication");
console.log("4. division \n");
const opt = parseInt(prompt("Choose the operation from 1 to 4 "));
if(opt < 1 || opt > 4)
{
  console.log("Invalid choice");
}
else
{
  switch(opt)
  {
    case 1:
      {
      let add;
      const num1 = parseInt(prompt("Enter the first number "));
      const num2 = parseInt(prompt("Enter the second number "));
      add = num1+num2;
      console.log("The sum is " + add);
      break;
      }

    case 2:
      {
      let sub;
      const num1 = parseInt(prompt("Enter the first number"));
      const num2 = parseInt(prompt("Enter the second number "));
      sub = num1-num2;
      console.log("The difference is " + sub);
      break;
      }

    case 3:
      {
      let mul;
      const num1 = parseInt(prompt("Enter the first number "));
      const num2 = parseInt(prompt("Enter the second number "));
      mul = num1*num2;
      console.log("The product is " + mul);
      break;
      }
      case 4:
      {
      let div; 
      const num1 = parseInt(prompt("Enter the first number "));
      const num2 = parseInt(prompt("Enter the second number "));
      div = num1/num2;
      console.log("The quotient is " + div);
      break;
      }

    default:
      console.log("invalid choice");
      break;
  }
}

      
