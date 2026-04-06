'use strict';

const { test, before, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('../src/app');
const store = require('../src/data/store');

let server;
before(() => { server = app.listen(0); });
beforeEach(() => store.reset());

function req(method, path, body) {
    return new Promise((resolve, reject) => {
        const data = body ? JSON.stringify(body) : null;
        const opts = {
            hostname: '127.0.0.1',
            port: server.address().port,
            method,
            path,
            headers: {
                'Content-Type': 'application/json',
                ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
            },
        };
        const r = http.request(opts, (res) => {
            let raw = '';
            res.on('data', c => raw += c);
            res.on('end', () => resolve({ status: res.statusCode, body: raw ? JSON.parse(raw) : null }));
        });
        r.on('error', reject);
        if (data) r.write(data);
        r.end();
    });
}

test('GET /products returns all 3 products', async () => {
    const { status, body } = await req('GET', '/products');
    assert.equal(status, 200);
    assert.equal(body.data.length, 3);
});

test('GET /products?category=widgets returns only widgets', async () => {
    const { status, body } = await req('GET', '/products?category=widgets');
    assert.equal(status, 200);
    assert.equal(body.data.length, 2);
    assert.ok(body.data.every(p => p.category === 'widgets'));
});

test('GET /products?minPrice=20 filters by minimum price', async () => {
    const { status, body } = await req('GET', '/products?minPrice=20');
    assert.equal(status, 200);
    assert.equal(body.data.length, 2);
    assert.ok(body.data.every(p => p.price >= 20));
});

test('GET /products/:id returns a single product', async () => {
    const { status, body } = await req('GET', '/products/1');
    assert.equal(status, 200);
    assert.equal(body.data.name, 'Widget Pro');
});

test('GET /products/:id returns 404 for unknown id', async () => {
    const { status } = await req('GET', '/products/999');
    assert.equal(status, 404);
});

test('POST /products creates a new product', async () => {
    const { status, body } = await req('POST', '/products', { name: 'New Thing', price: 19.99, category: 'gadgets', stock: 10 });
    assert.equal(status, 201);
    assert.equal(body.data.name, 'New Thing');
    assert.equal(body.data.price, 19.99);
    assert.ok(body.data.id);
});

test('POST /products defaults stock to 0', async () => {
    const { status, body } = await req('POST', '/products', { name: 'No Stock', price: 5.00 });
    assert.equal(status, 201);
    assert.equal(body.data.stock, 0);
});

test('PATCH /products/:id updates fields', async () => {
    const { status, body } = await req('PATCH', '/products/1', { price: 39.99 });
    assert.equal(status, 200);
    assert.equal(body.data.price, 39.99);
    assert.equal(body.data.name, 'Widget Pro');
});

test('PATCH /products/:id returns 404 for unknown id', async () => {
    const { status } = await req('PATCH', '/products/999', { price: 1 });
    assert.equal(status, 404);
});

test('DELETE /products/:id removes the product', async () => {
    await req('DELETE', '/products/1');
    const { status } = await req('GET', '/products/1');
    assert.equal(status, 404);
});

test('DELETE /products/:id returns 204', async () => {
    const { status } = await req('DELETE', '/products/2');
    assert.equal(status, 204);
});

test('DELETE /products/:id returns 404 for unknown id', async () => {
    const { status } = await req('DELETE', '/products/999');
    assert.equal(status, 404);
});
