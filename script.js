let num1 = 0;
let num2 = 0;
let operation = "";
let displayValue = "";
let numberSelector = document.querySelectorAll(".num");
let screenSelector = document.querySelector(".screen");
let clearSelector = document.querySelector(".clearButton");

numberSelector.forEach(number => {
    number.addEventListener("click", updateDisplayValue)
});

clearSelector.addEventListener("click", clearDisplayValue);

function add (num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function subtract (num1, num2) {
    let difference = num1 - num2;
    return difference;
}
function multiply (num1, num2) {
    let product = num1 * num2;
    return product;
}
function divide (num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}
function operate (operation, num1, num2) {
    switch (operation) {
        case "addition":
            return add(num1, num2);
            break;
        case "subtraction":
            return subtract(num1, num2);
            break;
        case "multiplication":
            return multiply(num1, num2);
            break;
        case "division":
            return divide(num1, num2);
            break;
    }
}
function clearDisplayValue () {
    displayValue = "";
    screenSelector.innerText = displayValue;
}
function updateDisplayValue (e) {
    let numberClicked = e.target.innerText;
    displayValue = displayValue.concat(numberClicked);
    screenSelector.innerText = displayValue;
}
