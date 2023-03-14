//1. Define prompt so we can respond from our IDE 
const prompt = require('prompt-sync')();

// 1. write a prompt to select an operation
let operator = prompt('select an operator: a. Addition, b. Subtraction, c. Division, d. Multiplication: ') .toLowerCase();
//3. Create a function that checks the user selection of operator
function checkOperator() {
    if (operator === "a" || operator === "b" || operator === "c" || operator === "d" && operator != '') {
       performOperation();
} else {
    console.log('please insert a valid input of operator!');
 }
 resetOperatorSelection();
}
checkOperator();

function performOperation() {
let firstnumber = parseInt(prompt('Enter the first number:'));

let secondnumber = parseInt(prompt('enter the second number:'));

if (operator ==='a') {
    let Addition = firstnumber + secondnumber;
    console.log("the sum is: ${sum}");
    return Addition;
    } else if (operation ==='b') {
        let Subtraction = firstnumber - secondnumber;
        console.log("the difference is: ${subtraction}");
        return Subtraction;
    } else if (operation ==='c') {
        let Division = firstnumber / secondnumber;
        console.log("the division is: ${divide}");
        return Division;
    } else if (operation ==='d') {
        let Multiplication = firstnumber * secondnumber;
        console.log("the multiplication is: ${multiply}");
        return Multiplication;
    } else {
        console.log('please insert a valid input!');
    }
    performOperation();
}
function resetOperatorSelection(){
    operation = prompt('select an operation: a. add, b. subtraction, c. divide, d. multiply')
checkoperation();
}