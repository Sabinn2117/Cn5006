//program to perform simple maths
console.log("1. addition);
console.log("2.subtraction");
console.log("3.multiplication");
console.log("4. division");
const opt = parseInt(prompt("Choose the operation from 1 to 4");
if(opt<0 && opt>5)
{
  console.log("Invalid choice");
}
else
{
  switch(opt)
  {
    case 1:
      let add;
      const num1 = parseInt(prompt("Enter the first number");
      const num2 = parseInt(prompt("Enter the second number");
      add = num1+num2;
      console.log("The sum is " + add);
      break;

    case 2:
      let sub;
      const num1 = parseInt(prompt("Enter the first number");
      const num2 = parseInt(prompt("Enter the second number");
      sub = num1-num2;
      console.log("The difference is " + sub);
      break;

    default:
      console.log("invalid choice");
      break;
  }
}

      
