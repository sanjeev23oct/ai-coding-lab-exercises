const { test, before, beforeEach, describe } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');
const store = require('../src/data/store');

// Simple HTTP helper — avoids supertest dependency
const http = require('http');

function request(server, method, path, body) {
    return new Promise((resolve, reject) => {
        const data = body ? JSON.stringify(body) : null;
        const options = {
            method,
            path,
            headers: {
                'Content-Type': 'application/json',
                ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
            },
        };
        const req = server.request(options, (res) => {
            let raw = '';
            res.on('data', c => raw += c);
            res.on('end', () => {
                resolve({
                    status: res.statusCode,
                    body: raw ? JSON.parse(raw) : null,
                });
            });
        });
        req.on('error', reject);
        if (data) req.write(data);
        req.end();
    });
}

let server;
let http_server;

before(() => {
    http_server = app.listen(0);
    server = http.request.bind(http, { host: '127.0.0.1', port: http_server.address().port });
    // Monkey-patch so request() works cleanly
    server = (method, path, body) => {
        return new Promise((resolve, reject) => {
            const data = body ? JSON.stringify(body) : null;
            const options = {
                host: '127.0.0.1',
                port: http_server.address().port,
                method,
                path,
                headers: {
                    'Content-Type': 'application/json',
                    ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
                },
            };
            const req = http.request(options, (res) => {
                let raw = '';
                res.on('data', c => raw += c);
                res.on('end', () => {
                    resolve({
                        status: res.statusCode,
                        body: raw ? JSON.parse(raw) : null,
                    });
                });
            });
            req.on('error', reject);
            if (data) req.write(data);
            req.end();
        });
    };
});

beforeEach(() => {
    store._reset();
});

describe('GET /notes', () => {
    test('returns empty array when no notes', async () => {
        const res = await server('GET', '/notes');
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { data: [] });
    });

    test('returns all notes', async () => {
        store.create({ title: 'First', body: 'Hello' });
        store.create({ title: 'Second', body: 'World' });
        const res = await server('GET', '/notes');
        assert.equal(res.status, 200);
        assert.equal(res.body.data.length, 2);
    });
});

describe('POST /notes', () => {
    test('creates a note with title and body', async () => {
        const res = await server('POST', '/notes', { title: 'My Note', body: 'Some content' });
        assert.equal(res.status, 201);
        assert.equal(res.body.data.title, 'My Note');
        assert.equal(res.body.data.body, 'Some content');
        assert.ok(res.body.data.id);
        assert.ok(res.body.data.createdAt);
    });

    test('creates a note with title only', async () => {
        const res = await server('POST', '/notes', { title: 'Title Only' });
        assert.equal(res.status, 201);
        assert.equal(res.body.data.body, '');
    });

    test('returns 400 when title is missing', async () => {
        const res = await server('POST', '/notes', { body: 'No title' });
        assert.equal(res.status, 400);
        assert.ok(res.body.error);
    });
});

describe('GET /notes/:id', () => {
    test('returns a note by id', async () => {
        const note = store.create({ title: 'Find Me', body: 'Here' });
        const res = await server('GET', `/notes/${note.id}`);
        assert.equal(res.status, 200);
        assert.equal(res.body.data.title, 'Find Me');
    });

    test('returns 404 for unknown id', async () => {
        const res = await server('GET', '/notes/999');
        assert.equal(res.status, 404);
    });
});

describe('PUT /notes/:id', () => {
    test('updates a note', async () => {
        const note = store.create({ title: 'Old Title' });
        const res = await server('PUT', `/notes/${note.id}`, { title: 'New Title' });
        assert.equal(res.status, 200);
        assert.equal(res.body.data.title, 'New Title');
    });

    test('returns 404 for unknown id', async () => {
        const res = await server('PUT', '/notes/999', { title: 'X' });
        assert.equal(res.status, 404);
    });
});

describe('DELETE /notes/:id', () => {
    test('deletes a note', async () => {
        const note = store.create({ title: 'Delete Me' });
        const res = await server('DELETE', `/notes/${note.id}`);
        assert.equal(res.status, 204);
        assert.equal(store.getById(note.id), null);
    });

    test('returns 404 for unknown id', async () => {
        const res = await server('DELETE', '/notes/999');
        assert.equal(res.status, 404);
    });
});
