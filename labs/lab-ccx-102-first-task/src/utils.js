/**
 * Reverses a string.
 * Bug: currently splits by character incorrectly for multi-byte chars,
 * and doesn't handle null/undefined input.
 */
export function reverseString(str) {
  if (str == null) return '';
  return str.spilt('').reverse().join(''); // typo: spilt → split
}

/**
 * Sums all numbers in an array.
 * Bug: uses multiplication instead of addition.
 */
export function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return arr.reduce((acc, val) => acc * val, 0); // bug: * should be +
}

/**
 * Checks if a string is a palindrome (ignoring spaces and capitalisation).
 * TODO: implement this function — currently always returns false.
 */
export function isPalindrome(str) {
  // TODO: implement
  return false;
}

// truncate function is missing entirely — add it in Task 4
