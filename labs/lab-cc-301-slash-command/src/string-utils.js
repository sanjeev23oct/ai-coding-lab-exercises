// String utility functions
// This module has some issues — your /review command will find them

function truncate(str, maxLength) {
    // BUG: doesn't handle null/undefined input
    if (str.length <= maxLength) return str
    return str.substring(0, maxLength) + '...'
}

function slugify(text) {
    // converts "Hello World" → "hello-world"
    return text.toLowerCase().replace(/ /g, '-')
    // TODO: doesn't handle special characters like accents, punctuation
}

function capitalize(str) {
    // BUG: crashes on empty string
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function countWords(text) {
    // Counts words in a string
    return text.split(' ').length
    // TODO: doesn't handle multiple spaces or newlines
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z]/g, '')
    return cleaned === cleaned.split('').reverse().join('')
}

module.exports = { truncate, slugify, capitalize, countWords, isPalindrome }
