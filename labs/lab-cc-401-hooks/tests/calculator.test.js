const { test, describe } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, modulo } = require('../src/calculator');

describe('calculator', () => {
    test('add', () => assert.strictEqual(add(2, 3), 5));
    test('subtract', () => assert.strictEqual(subtract(10, 4), 6));
    test('multiply', () => assert.strictEqual(multiply(3, 4), 12));
    test('divide', () => assert.strictEqual(divide(10, 2), 5));
    test('divide by zero throws', () => assert.throws(() => divide(5, 0)));
    test('modulo', () => assert.strictEqual(modulo(10, 3), 1));
});
