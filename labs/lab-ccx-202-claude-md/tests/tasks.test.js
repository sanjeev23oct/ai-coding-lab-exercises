const { describe, it, before, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('../src/app');
const store = require('../src/db/store');

let server;
let baseUrl;

before(() => new Promise(resolve => {
  server = http.createServer(app);
  server.listen(0, () => {
    baseUrl = `http://localhost:${server.address().port}`;
    resolve();
  });
}));

beforeEach(() => store.tasks.reset());

async function req(method, path, body) {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json', 'x-api-key': 'dev-key-123' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => null);
  return { status: res.status, body: data };
}

describe('GET /api/tasks', () => {
  it('returns tasks in { data: [...] } shape', async () => {
    const { status, body } = await req('GET', '/api/tasks');
    assert.equal(status, 200);
    assert.ok(Array.isArray(body.data));
  });
});

describe('POST /api/tasks', () => {
  it('creates a task', async () => {
    const { status, body } = await req('POST', '/api/tasks', { title: 'New task' });
    assert.equal(status, 201);
    assert.ok(body.data.id);
    assert.equal(body.data.title, 'New task');
  });
  it('returns 400 when title is missing', async () => {
    const { status, body } = await req('POST', '/api/tasks', { priority: 'high' });
    assert.equal(status, 400);
    assert.ok(body.error);
  });
});

describe('Auth', () => {
  it('returns 401 without API key', async () => {
    const res = await fetch(`${baseUrl}/api/tasks`);
    assert.equal(res.status, 401);
  });
});
