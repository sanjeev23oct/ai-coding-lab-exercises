/**
 * Authentication module
 * This file contains intentional security issues for the code-review lab exercise.
 */

const crypto = require('crypto');

// Issue 1: Hardcoded secrets
const JWT_SECRET = 'super-secret-key-123';
const ADMIN_PASSWORD = 'admin123';

// Issue 2: Weak password hashing (MD5)
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// Issue 3: No rate limiting on login
let loginAttempts = {};

function login(username, password) {
  // Issue 4: SQL injection style (string concatenation)
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${hashPassword(password)}'`;

  // Issue 5: Comparing passwords in a timing-unsafe way
  if (password === ADMIN_PASSWORD) {
    return { token: JWT_SECRET, role: 'admin' };
  }

  return null;
}

// Issue 6: Token validation doesn't check expiry
function validateToken(token) {
  return token === JWT_SECRET; // always valid, never expires
}

// Issue 7: Logs sensitive data
function auditLog(user, action) {
  console.log(`User ${user.username} (password: ${user.password}) performed: ${action}`);
}

module.exports = { login, validateToken, hashPassword, auditLog };
