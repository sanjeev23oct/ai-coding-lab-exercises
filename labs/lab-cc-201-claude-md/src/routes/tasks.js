const express = require('express');
const router = express.Router();

// In-memory store (replace with DB in production)
let tasks = [];
let nextId = 1;

// GET /api/tasks — list all tasks (filter by ?status=todo|done)
router.get('/', (req, res) => {
    const { status } = req.query;
    const result = status ? tasks.filter(t => t.status === status) : tasks;
    res.json({ data: result });
});

// POST /api/tasks — create a task
router.post('/', (req, res) => {
    const { title, priority = 'medium' } = req.body;
    if (!title) return res.status(400).json({ error: 'title is required' });

    const validPriorities = ['low', 'medium', 'high'];
    if (!validPriorities.includes(priority)) {
        return res.status(400).json({ error: `priority must be one of: ${validPriorities.join(', ')}` });
    }

    const task = { id: nextId++, title, priority, status: 'todo', createdAt: new Date().toISOString() };
    tasks.push(task);
    res.status(201).json({ data: task });
});

// PATCH /api/tasks/:id — update status
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: 'task not found' });

    const { status } = req.body;
    if (status) task.status = status;
    res.json({ data: task });
});

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({ error: 'task not found' });

    tasks.splice(idx, 1);
    res.status(204).send();
});

module.exports = { tasksRouter: router };
