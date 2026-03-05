// A simple calculator module — used in the hooks lab
// Claude Code will edit this file so you can observe hooks firing

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('division by zero');
    return a / b;
}

// TODO: implement modulo
function modulo(a, b) {
    throw new Error('not implemented');
}

module.exports = { add, subtract, multiply, divide, modulo };
