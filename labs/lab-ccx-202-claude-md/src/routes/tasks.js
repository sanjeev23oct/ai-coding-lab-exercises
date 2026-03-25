const express = require('express');
const store = require('../db/store');

const router = express.Router();

// GET /api/tasks — list all tasks
router.get('/', (req, res) => {
  const tasks = store.tasks.getAll();
  res.json({ data: tasks });
});

// GET /api/tasks/:id
router.get('/:id', (req, res) => {
  const task = store.tasks.getById(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ data: task });
});

// POST /api/tasks
router.post('/', (req, res) => {
  const { title, priority } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const task = store.tasks.create({ title, priority: priority || 'medium' });
  res.status(201).json({ data: task });
});

// PATCH /api/tasks/:id
router.patch('/:id', (req, res) => {
  const task = store.tasks.update(req.params.id, req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ data: task });
});

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
  const deleted = store.tasks.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
});

module.exports = router;
