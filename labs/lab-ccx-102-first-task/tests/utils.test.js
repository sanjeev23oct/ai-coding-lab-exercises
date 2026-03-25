import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { reverseString, sumArray, isPalindrome } from '../src/utils.js';

describe('reverseString', () => {
  it('reverses a simple string', () => {
    assert.equal(reverseString('hello'), 'olleh');
  });
  it('handles empty string', () => {
    assert.equal(reverseString(''), '');
  });
  it('handles null input', () => {
    assert.equal(reverseString(null), '');
  });
});

describe('sumArray', () => {
  it('sums a list of numbers', () => {
    assert.equal(sumArray([1, 2, 3, 4]), 10);
  });
  it('returns 0 for empty array', () => {
    assert.equal(sumArray([]), 0);
  });
  it('handles negative numbers', () => {
    assert.equal(sumArray([-1, -2, 3]), 0);
  });
});

describe('isPalindrome', () => {
  it('returns true for a palindrome', () => {
    assert.equal(isPalindrome('racecar'), true);
  });
  it('ignores spaces and capitalisation', () => {
    assert.equal(isPalindrome('A man a plan a canal Panama'), true);
  });
  it('returns false for non-palindrome', () => {
    assert.equal(isPalindrome('hello'), false);
  });
});
