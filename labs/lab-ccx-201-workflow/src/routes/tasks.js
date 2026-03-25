const express = require('express');
const store = require('../data/store');
const { validate } = require('../middleware/validate');

const router = express.Router();

// GET /api/tasks — list all tasks (no pagination yet)
router.get('/', (req, res) => {
  const tasks = store.getAll();
  res.json({ data: tasks, total: tasks.length });
});

// GET /api/tasks/:id — get single task
router.get('/:id', (req, res) => {
  const task = store.getById(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ data: task });
});

// POST /api/tasks — create task
router.post('/', validate(['title']), (req, res) => {
  const { title, priority = 'medium', status = 'todo' } = req.body;
  const task = store.create({ title, priority, status });
  res.status(201).json({ data: task });
});

// PATCH /api/tasks/:id — update task
router.patch('/:id', (req, res) => {
  const task = store.update(req.params.id, req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ data: task });
});

// DELETE /api/tasks/:id — delete task
router.delete('/:id', (req, res) => {
  const deleted = store.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
});

module.exports = router;
