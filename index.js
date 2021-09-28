var number = 10;
var number2 = 20;

function add(number, number2) {
    return (number += number2);

};

function subtract(number, number2) {
    return (number -= number2);
};

function divide(number, number2) {
    return (number /= number2);

};
function multiply(number, number2) {
    return (number *= number2);
};

// Increment 
let number3 = 10;

function increment(number3) {
    number3++
    return number3;
}

// Decrement 
function decrement(number3) {
    --number3;
    return number3;
}

function makeInt(string) {
    return parseInt(string, 10)
}
function preserveDecimal(num) {
    return parseFloat(num, 10);
}



