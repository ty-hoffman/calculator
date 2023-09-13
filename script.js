let num1 = 0;
let num2 = 0;
let operation = "";
let displayValue = "";
let numberSelector = document.querySelectorAll(".num");
let screenSelector = document.querySelector(".screen");
let clearSelector = document.querySelector(".clearButton");
let operationSelector = document.querySelectorAll(".operation");
let equalsSelector = document.querySelector(".equals");

numberSelector.forEach(number => {
    number.addEventListener("click", updateDisplayValue)
});

operationSelector.forEach(operation => {
    operation.addEventListener("click", setOperation)
});

clearSelector.addEventListener("click", clearDisplayValue);
equalsSelector.addEventListener("click", operate);

function add (x, y) {
    let sum = x + y;
    return +sum.toFixed(6);
}
function subtract (x, y) {
    let difference = x - y;
    return +difference.toFixed(6);
}
function multiply (x, y) {
    let product = x * y;
    return +product.toFixed(6);
}
function divide (x, y) {
    let quotient = x / y;
    return +quotient.toFixed(6);
}
function operate () {
    num2 = Number(displayValue);
    switch (operation) {
        case "plus":
            screenSelector.innerText = add(num1, num2);
            break;
        case "sub":
            screenSelector.innerText = subtract(num1, num2);
            break;
        case "mult":
            screenSelector.innerText = multiply(num1, num2);
            break;
        case "div":
            screenSelector.innerText = divide(num1, num2);
            break;
    }
}
function setOperation (e) {
    if (operation != "") {
        operate();
        operation = e.target.id;
        num1 = Number(screenSelector.innerText);
        displayValue = "";
    }
    else {
    operation = e.target.id;
    num1 = Number(displayValue);
    displayValue = "";
    screenSelector.innerText = displayValue
    }
}
function clearDisplayValue () {
    num1 = 0;
    num2 = 0;
    operation = "";
    displayValue = "";
    screenSelector.innerText = displayValue;
}
function updateDisplayValue (e) {
    let numberClicked = e.target.innerText;
    displayValue = displayValue.concat(numberClicked);
    screenSelector.innerText = displayValue;
}
