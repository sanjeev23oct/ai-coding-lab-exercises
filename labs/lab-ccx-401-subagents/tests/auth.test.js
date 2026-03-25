const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { hashPassword, validateToken } = require('../src/auth');

describe('auth', () => {
  it('hashPassword returns a string', () => {
    const hash = hashPassword('test123');
    assert.equal(typeof hash, 'string');
    assert.ok(hash.length > 0);
  });

  it('validateToken returns true for the secret', () => {
    assert.equal(validateToken('super-secret-key-123'), true);
  });

  it('validateToken returns false for invalid token', () => {
    assert.equal(validateToken('wrong-token'), false);
  });
});
