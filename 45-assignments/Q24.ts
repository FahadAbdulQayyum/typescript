// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let firstNumberInString : string = '1';
let secondNumber : number = 1;
let thirdNumber : number = 3;

console.log(firstNumberInString == secondNumber ? "Equal": "Not equal"); // Earlier highlighted the error.
console.log(secondNumber === secondNumber ? "Equal": "Not Equal"); // Equal or unequal.
console.log(secondNumber === thirdNumber ? "Equal": "Not Equal"); // Equal or unequal.
console.log(secondNumber > thirdNumber ? "Greater": "Not Greater"); // greater or not greater.
console.log(secondNumber < thirdNumber ? secondNumber+" Less than "+thirdNumber: secondNumber+" Not Less than "+thirdNumber); // less than and not less than with values.

console.log((secondNumber === thirdNumber)&&(secondNumber === 3) ? "Equal": "Not Equal"); // Equal or unequal.
console.log((secondNumber === thirdNumber)||(secondNumber === 3) ? "Equal": "Not Equal"); // Equal or unequal.
console.log((secondNumber > thirdNumber)&&(secondNumber < 3) ? "Condition True": "Condition not true"); // Condition True or Condition not true.
console.log((secondNumber > thirdNumber)||(secondNumber < 3) ? "Condition True": "Condition not true"); // Condition True or Condition not true.

console.log(typeof secondNumber === 'number' ? "Number" : "Not a number")
console.log(typeof secondNumber === 'string' ? "Number" : "Not a number")

