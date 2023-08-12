// Helper function to escape special characters in a string
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Functions for basic arithmetic operations
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

// Function to perform selected arithmetic operation
function performOperation(operatorOption, firstNumber, secondNumber) {
    if (operatorOption === "+") {
        return add(firstNumber, secondNumber);
    } else if (operatorOption === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operatorOption === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operatorOption === "/") {
        return division(firstNumber, secondNumber);
    }
}

// DOM elements and variables
const button = document.querySelectorAll('.button');
const display = document.getElementById('display');
let storedNumber = '';

// Add click event listeners to number buttons
button.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        display.textContent = storedNumber;
    });
});

// Function to clear the display
function clearDisplay() {
    storedNumber = '';
    display.textContent = '';
}

// Function to perform calculations
function calculate() {
    const operators = ['+', '-', '*', '/'];
    let currentNumber = '';
    let result = 0;
    let operator = '+';

    // Iterate through the stored number to calculate
    for (let i = 0; i < storedNumber.length; i++) {
        const char = storedNumber[i];

        if (operators.includes(char)) {
            result = performOperation(operator, result, parseFloat(currentNumber));
            currentNumber = '';
            operator = char;
        } else {
            currentNumber += char;
        }
    }

    if (currentNumber !== '') {
        result = performOperation(operator, result, parseFloat(currentNumber));
    }

    display.textContent = result;
    storedNumber = result.toString();
}


