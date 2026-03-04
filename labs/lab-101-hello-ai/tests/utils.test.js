import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize, reverseString, countVowels, isPalindrome, truncate } from '../src/utils.js';

// ──────────────────────────────────────────────
//  capitalize
// ──────────────────────────────────────────────
describe('capitalize', () => {
    test('capitalizes the first letter', () => {
        assert.equal(capitalize('hello'), 'Hello');
    });
    test('leaves an already-capitalized string unchanged', () => {
        assert.equal(capitalize('World'), 'World');
    });
    test('handles an empty string', () => {
        assert.equal(capitalize(''), '');
    });
    test('handles a single character', () => {
        assert.equal(capitalize('a'), 'A');
    });
});

// ──────────────────────────────────────────────
//  reverseString
// ──────────────────────────────────────────────
describe('reverseString', () => {
    test('reverses a simple string', () => {
        assert.equal(reverseString('hello'), 'olleh');
    });
    test('handles a palindrome (still works)', () => {
        assert.equal(reverseString('racecar'), 'racecar');
    });
    test('handles an empty string', () => {
        assert.equal(reverseString(''), '');
    });
    test('handles a single character', () => {
        assert.equal(reverseString('x'), 'x');
    });
});

// ──────────────────────────────────────────────
//  countVowels
// ──────────────────────────────────────────────
describe('countVowels', () => {
    test('counts vowels in a lowercase string', () => {
        assert.equal(countVowels('hello'), 2);
    });
    test('counts vowels case-insensitively', () => {
        assert.equal(countVowels('AEIOU'), 5);
    });
    test('returns 0 for a string with no vowels', () => {
        assert.equal(countVowels('xyz'), 0);
    });
    test('handles an empty string', () => {
        assert.equal(countVowels(''), 0);
    });
});

// ──────────────────────────────────────────────
//  isPalindrome
// ──────────────────────────────────────────────
describe('isPalindrome', () => {
    test('returns true for a palindrome', () => {
        assert.equal(isPalindrome('racecar'), true);
    });
    test('returns false for a non-palindrome', () => {
        assert.equal(isPalindrome('hello'), false);
    });
    test('returns true for an empty string', () => {
        assert.equal(isPalindrome(''), true);
    });
    test('returns true for a single character', () => {
        assert.equal(isPalindrome('a'), true);
    });
    test('is case-sensitive', () => {
        assert.equal(isPalindrome('Racecar'), false);
    });
});

// ──────────────────────────────────────────────
//  truncate
// ──────────────────────────────────────────────
describe('truncate', () => {
    test('truncates a long string', () => {
        assert.equal(truncate('Hello World', 8), 'Hello...');
    });
    test('does not truncate a string shorter than maxLength', () => {
        assert.equal(truncate('Hi', 10), 'Hi');
    });
    test('does not truncate when string length exactly equals maxLength', () => {
        assert.equal(truncate('Hello', 5), 'Hello');
    });
    test('handles a very short maxLength', () => {
        assert.equal(truncate('Hello World', 3), '...');
    });
});
