const { test, describe } = require('node:test');
const assert = require('node:assert');

// Lightweight test that the routes module exports correctly
describe('tasks router', () => {
    test('exports tasksRouter', () => {
        const { tasksRouter } = require('../src/routes/tasks');
        assert.ok(tasksRouter, 'tasksRouter should be exported');
        assert.strictEqual(typeof tasksRouter, 'function', 'router should be a function');
    });
});

describe('auth middleware', () => {
    test('exports authMiddleware', () => {
        const { authMiddleware } = require('../src/middleware/auth');
        assert.ok(authMiddleware, 'authMiddleware should be exported');
        assert.strictEqual(typeof authMiddleware, 'function', 'middleware should be a function');
    });

    test('rejects missing API key', () => {
        const { authMiddleware } = require('../src/middleware/auth');
        const responses = [];
        const req = { headers: {} };
        const res = {
            status: (code) => ({ json: (body) => responses.push({ code, body }) }),
        };
        authMiddleware(req, res, () => {});
        assert.strictEqual(responses[0].code, 401);
    });
});
