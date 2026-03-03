// ============================================================
//  AI Coding Lab — Lab 101: Test Suite
// ============================================================
//  These tests define what your implementations must do.
//  Run: npm test
//  Goal: All 12 tests passing ✅
// ============================================================

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
    capitalize,
    reverseString,
    countVowels,
    isPalindrome,
    truncate,
} = require("../src/utils");

// ---- capitalize ----
describe("capitalize", () => {
    it("should capitalize the first letter", () => {
        assert.strictEqual(capitalize("hello"), "Hello");
    });

    it("should handle already capitalized strings", () => {
        assert.strictEqual(capitalize("Hello"), "Hello");
    });

    it("should handle empty strings", () => {
        assert.strictEqual(capitalize(""), "");
    });
});

// ---- reverseString ----
describe("reverseString", () => {
    it("should reverse a string", () => {
        assert.strictEqual(reverseString("hello"), "olleh");
    });

    it("should handle single character", () => {
        assert.strictEqual(reverseString("a"), "a");
    });
});

// ---- countVowels ----
describe("countVowels", () => {
    it("should count vowels in a lowercase string", () => {
        assert.strictEqual(countVowels("hello"), 2);
    });

    it("should count vowels case-insensitively", () => {
        assert.strictEqual(countVowels("AEIOU"), 5);
    });

    it("should return 0 for strings with no vowels", () => {
        assert.strictEqual(countVowels("xyz"), 0);
    });
});

// ---- isPalindrome ----
describe("isPalindrome", () => {
    it("should detect a palindrome", () => {
        assert.strictEqual(isPalindrome("racecar"), true);
    });

    it("should be case-insensitive", () => {
        assert.strictEqual(isPalindrome("Racecar"), true);
    });

    it("should return false for non-palindromes", () => {
        assert.strictEqual(isPalindrome("hello"), false);
    });
});

// ---- truncate ----
describe("truncate", () => {
    it("should truncate long strings and add ...", () => {
        assert.strictEqual(truncate("hello world", 5), "hello...");
    });

    it("should not truncate short strings", () => {
        assert.strictEqual(truncate("hi", 10), "hi");
    });
});
