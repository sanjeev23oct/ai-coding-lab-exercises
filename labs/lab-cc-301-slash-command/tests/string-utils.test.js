const { test, describe } = require('node:test');
const assert = require('node:assert');
const { isPalindrome, truncate, slugify } = require('../src/string-utils');

describe('isPalindrome', () => {
    test('racecar is palindrome', () => assert.ok(isPalindrome('racecar')));
    test('hello is not palindrome', () => assert.ok(!isPalindrome('hello')));
    test('handles spaces and punctuation', () => assert.ok(isPalindrome('A man a plan a canal Panama')));
});

describe('truncate', () => {
    test('returns string unchanged if under maxLength', () =>
        assert.strictEqual(truncate('hello', 10), 'hello'));
    test('truncates and adds ellipsis', () =>
        assert.strictEqual(truncate('hello world', 5), 'hello...'));
});

describe('slugify', () => {
    test('lowercases and replaces spaces', () =>
        assert.strictEqual(slugify('Hello World'), 'hello-world'));
});
