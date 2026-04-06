'use strict';

const express = require('express');
const store = require('../data/store');

const router = express.Router();

// GET /products — list all, with optional ?category=&minPrice=&maxPrice=
router.get('/', (req, res) => {
    const products = store.getAll(req.query);
    res.json({ data: products });
});

// GET /products/:id
router.get('/:id', (req, res) => {
    const product = store.getById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ data: product });
});

// POST /products
// NOTE: missing input validation — name/price are not checked
router.post('/', (req, res) => {
    const { name, price, category, stock } = req.body;
    const product = store.create({ name, price, category, stock });
    res.status(201).json({ data: product });
});

// PATCH /products/:id
// NOTE: no validation, any value accepted
router.patch('/:id', (req, res) => {
    const product = store.update(req.params.id, req.body);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ data: product });
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
    const deleted = store.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.status(204).send();
});

module.exports = router;
