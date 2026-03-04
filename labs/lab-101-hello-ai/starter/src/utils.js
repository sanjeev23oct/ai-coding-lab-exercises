// ============================================================
//  AI Coding Lab — Lab 101: String Utilities
// ============================================================
//
//  YOUR TASK: Implement the functions below using your AI tool.
//
//  Run `npm test` to check if your implementations are correct.
//  All 12 tests should pass when you're done.
//
// ============================================================

/**
 * Capitalize the first letter of a string.
 * @param {string} str - The input string
 * @returns {string} The string with its first letter capitalized
 *
 * Examples:
 *   capitalize("hello") → "Hello"
 *   capitalize("world") → "World"
 *   capitalize("") → ""
 */
function capitalize(str) {
  // TODO: Implement this function
}

/**
 * Reverse a string.
 * @param {string} str - The input string
 * @returns {string} The reversed string
 *
 * Examples:
 *   reverseString("hello") → "olleh"
 *   reverseString("abc") → "cba"
 */
function reverseString(str) {
  // TODO: Implement this function
}

/**
 * Count the number of vowels (a, e, i, o, u) in a string.
 * Should be case-insensitive.
 * @param {string} str - The input string
 * @returns {number} The number of vowels
 *
 * Examples:
 *   countVowels("hello") → 2
 *   countVowels("AEIOU") → 5
 */
function countVowels(str) {
  // TODO: Implement this function
}

/**
 * Check if a string is a palindrome (case-insensitive).
 * @param {string} str - The input string
 * @returns {boolean} True if the string is a palindrome
 *
 * Examples:
 *   isPalindrome("racecar") → true
 *   isPalindrome("Racecar") → true
 *   isPalindrome("hello") → false
 */
function isPalindrome(str) {
  // TODO: Implement this function
}

/**
 * Truncate a string to a maximum length, adding "..." if truncated.
 * If the string is shorter than or equal to maxLen, return it as-is.
 * @param {string} str - The input string
 * @param {number} maxLen - The maximum length before truncation
 * @returns {string} The truncated string
 *
 * Examples:
 *   truncate("hello world", 5) → "hello..."
 *   truncate("hi", 10) → "hi"
 */
function truncate(str, maxLen) {
  // TODO: Implement this function
}

module.exports = {
  capitalize,
  reverseString,
  countVowels,
  isPalindrome,
  truncate,
};
