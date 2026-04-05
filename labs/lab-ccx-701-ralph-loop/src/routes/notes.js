const express = require('express');
const store = require('../data/store');

const router = express.Router();

// GET /notes — list all notes
router.get('/', (req, res) => {
    res.json({ data: store.getAll() });
});

// GET /notes/:id — get single note
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = store.getById(id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ data: note });
});

// POST /notes — create note
router.post('/', (req, res) => {
    try {
        const note = store.create(req.body);
        res.status(201).json({ data: note });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT /notes/:id — update note
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = store.update(id, req.body);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ data: note });
});

// DELETE /notes/:id — delete note
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = store.remove(id);
    if (!deleted) return res.status(404).json({ error: 'Note not found' });
    res.status(204).send();
});

module.exports = router;
