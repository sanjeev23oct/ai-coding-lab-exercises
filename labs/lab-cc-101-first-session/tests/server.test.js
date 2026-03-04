import { test, describe, after } from 'node:test';
import assert from 'node:assert/strict';
import { server } from '../src/server.js';

after(() => server.close());

const BASE = `http://localhost:${process.env.PORT || 3000}`;

async function req(method, path, body) {
    const opts = { method, headers: { 'content-type': 'application/json' } };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(`${BASE}${path}`, opts);
    const json = await res.json().catch(() => null);
    return { status: res.status, body: json };
}

describe('GET /tasks', () => {
    test('returns all tasks by default', async () => {
        const { status, body } = await req('GET', '/tasks');
        assert.equal(status, 200);
        assert.ok(Array.isArray(body));
        assert.ok(body.length >= 3);
    });

    test('filters by ?done=true', async () => {
        const { status, body } = await req('GET', '/tasks?done=true');
        assert.equal(status, 200);
        assert.ok(body.every(t => t.done === true));
    });

    test('filters by ?done=false', async () => {
        const { status, body } = await req('GET', '/tasks?done=false');
        assert.equal(status, 200);
        assert.ok(body.every(t => t.done === false));
    });
});

describe('GET /tasks/:id', () => {
    test('returns the task when found', async () => {
        const { status, body } = await req('GET', '/tasks/1');
        assert.equal(status, 200);
        assert.equal(body.id, 1);
    });

    test('returns 404 when task not found', async () => {
        const { status } = await req('GET', '/tasks/9999');
        assert.equal(status, 404);
    });
});

describe('POST /tasks', () => {
    test('creates a task with title', async () => {
        const { status, body } = await req('POST', '/tasks', { title: 'New task' });
        assert.equal(status, 201);
        assert.equal(body.title, 'New task');
        assert.equal(body.done, false);
        assert.ok(body.id);
    });

    test('returns 400 when title is missing', async () => {
        const { status } = await req('POST', '/tasks', { priority: 'high' });
        assert.equal(status, 400);
    });
});

describe('PATCH /tasks/:id', () => {
    test('marks a task as done', async () => {
        const { body: created } = await req('POST', '/tasks', { title: 'To complete' });
        const { status, body } = await req('PATCH', `/tasks/${created.id}`, { done: true });
        assert.equal(status, 200);
        assert.equal(body.done, true);
    });

    test('updates the title', async () => {
        const { body: created } = await req('POST', '/tasks', { title: 'Old title' });
        const { status, body } = await req('PATCH', `/tasks/${created.id}`, { title: 'New title' });
        assert.equal(status, 200);
        assert.equal(body.title, 'New title');
    });

    test('returns 404 for unknown id', async () => {
        const { status } = await req('PATCH', '/tasks/9999', { done: true });
        assert.equal(status, 404);
    });
});

describe('DELETE /tasks/:id', () => {
    test('deletes an existing task', async () => {
        const { body: created } = await req('POST', '/tasks', { title: 'To delete' });
        const { status } = await req('DELETE', `/tasks/${created.id}`);
        assert.equal(status, 204);
        const { status: getStatus } = await req('GET', `/tasks/${created.id}`);
        assert.equal(getStatus, 404);
    });

    test('returns 404 for unknown id', async () => {
        const { status } = await req('DELETE', '/tasks/9999');
        assert.equal(status, 404);
    });
});

describe('GET /tasks/stats', () => {
    test('returns total, done, and pending counts', async () => {
        const { status, body } = await req('GET', '/tasks/stats');
        assert.equal(status, 200);
        assert.ok(typeof body.total === 'number');
        assert.ok(typeof body.done === 'number');
        assert.ok(typeof body.pending === 'number');
        assert.equal(body.total, body.done + body.pending);
    });
});
