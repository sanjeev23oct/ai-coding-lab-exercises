const { describe, it, before, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('../src/app');
const store = require('../src/data/store');

let server;
let baseUrl;

before(() => new Promise(resolve => {
  server = http.createServer(app);
  server.listen(0, () => {
    baseUrl = `http://localhost:${server.address().port}`;
    resolve();
  });
}));

beforeEach(() => store.reset());

async function req(method, path, body) {
  const url = `${baseUrl}${path}`;
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  const res = await fetch(url, body ? { ...opts, body: JSON.stringify(body) } : opts);
  const data = await res.json().catch(() => null);
  return { status: res.status, body: data };
}

describe('GET /api/tasks (baseline)', () => {
  it('returns all tasks', async () => {
    const { status, body } = await req('GET', '/api/tasks');
    assert.equal(status, 200);
    assert.ok(body.data);
    assert.equal(body.total, 8);
  });
});

describe('GET /api/tasks (after pagination is added)', () => {
  it('returns limited tasks when ?limit is provided', async () => {
    const { status, body } = await req('GET', '/api/tasks?limit=3');
    assert.equal(status, 200);
    assert.equal(body.data.length, 3);
    assert.ok(body.nextCursor, 'should have nextCursor when more items exist');
  });

  it('returns next page when ?cursor is provided', async () => {
    const first = await req('GET', '/api/tasks?limit=3');
    const cursor = first.body.nextCursor;
    assert.ok(cursor);

    const second = await req('GET', `/api/tasks?limit=3&cursor=${cursor}`);
    assert.equal(second.status, 200);
    assert.equal(second.body.data.length, 3);
    // No overlap with first page
    const firstIds = first.body.data.map(t => t.id);
    const secondIds = second.body.data.map(t => t.id);
    assert.ok(!firstIds.some(id => secondIds.includes(id)), 'pages should not overlap');
  });

  it('returns null nextCursor on the last page', async () => {
    const first = await req('GET', '/api/tasks?limit=5');
    const second = await req('GET', `/api/tasks?limit=5&cursor=${first.body.nextCursor}`);
    assert.equal(second.status, 200);
    assert.equal(second.body.data.length, 3); // 8 total, 5 + 3
    assert.equal(second.body.nextCursor, null);
  });
});

describe('POST /api/tasks', () => {
  it('creates a task', async () => {
    const { status, body } = await req('POST', '/api/tasks', { title: 'New task' });
    assert.equal(status, 201);
    assert.equal(body.data.title, 'New task');
  });
});
