'use strict';

// In-memory product store
let products = [
    { id: 1, name: 'Widget Pro', price: 29.99, category: 'widgets', stock: 100, createdAt: new Date('2026-01-01').toISOString() },
    { id: 2, name: 'Gadget Plus', price: 49.99, category: 'gadgets', stock: 50, createdAt: new Date('2026-01-15').toISOString() },
    { id: 3, name: 'Doohickey', price: 9.99, category: 'widgets', stock: 200, createdAt: new Date('2026-02-01').toISOString() },
];
let nextId = 4;

function getAll(filters = {}) {
    let result = [...products];
    if (filters.category) {
        result = result.filter(p => p.category === filters.category);
    }
    if (filters.minPrice !== undefined) {
        result = result.filter(p => p.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice !== undefined) {
        result = result.filter(p => p.price <= parseFloat(filters.maxPrice));
    }
    return result;
}

function getById(id) {
    return products.find(p => p.id === parseInt(id)) || null;
}

function create(data) {
    const product = {
        id: nextId++,
        name: data.name,
        price: data.price,
        category: data.category || 'general',
        stock: data.stock !== undefined ? data.stock : 0,
        createdAt: new Date().toISOString(),
    };
    products.push(product);
    return product;
}

function update(id, data) {
    const idx = products.findIndex(p => p.id === parseInt(id));
    if (idx === -1) return null;
    const allowed = ['name', 'price', 'category', 'stock'];
    for (const key of allowed) {
        if (data[key] !== undefined) products[idx][key] = data[key];
    }
    return products[idx];
}

function remove(id) {
    const idx = products.findIndex(p => p.id === parseInt(id));
    if (idx === -1) return false;
    products.splice(idx, 1);
    return true;
}

function reset() {
    products = [
        { id: 1, name: 'Widget Pro', price: 29.99, category: 'widgets', stock: 100, createdAt: new Date('2026-01-01').toISOString() },
        { id: 2, name: 'Gadget Plus', price: 49.99, category: 'gadgets', stock: 50, createdAt: new Date('2026-01-15').toISOString() },
        { id: 3, name: 'Doohickey', price: 9.99, category: 'widgets', stock: 200, createdAt: new Date('2026-02-01').toISOString() },
    ];
    nextId = 4;
}

module.exports = { getAll, getById, create, update, remove, reset };
