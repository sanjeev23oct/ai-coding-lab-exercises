// A small Express API for a task manager.
// Some endpoints are incomplete or broken.
// Your job: use Claude Code to understand and fix them.

import express from 'express';

const app = express();
app.use(express.json());

// In-memory store
let tasks = [
    { id: 1, title: 'Read the codebase', done: false, priority: 'high' },
    { id: 2, title: 'Write unit tests', done: false, priority: 'medium' },
    { id: 3, title: 'Deploy to production', done: true, priority: 'low' },
];
let nextId = 4;

// GET /tasks — list all tasks
// BUG: should support ?done=true/false filter but ignores it
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /tasks/stats — return { total, done, pending }
// NOT IMPLEMENTED — returns 501
app.get('/tasks/stats', (req, res) => {
    res.status(501).json({ error: 'Not implemented' });
});

// GET /tasks/:id — get a single task
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));
    // BUG: returns 200 with undefined instead of 404 when not found
    res.json(task);
});

// POST /tasks — create a task
// BUG: doesn't validate that title is present
app.post('/tasks', (req, res) => {
    const task = {
        id: nextId++,
        title: req.body.title,
        done: false,
        priority: req.body.priority || 'medium',
    };
    tasks.push(task);
    res.json(task);
});

// PATCH /tasks/:id — update a task
// NOT IMPLEMENTED — returns 501
app.patch('/tasks/:id', (req, res) => {
    res.status(501).json({ error: 'Not implemented' });
});

// DELETE /tasks/:id — delete a task
// NOT IMPLEMENTED — returns 501
app.delete('/tasks/:id', (req, res) => {
    res.status(501).json({ error: 'Not implemented' });
});

const PORT = process.env.PORT || 3000;
export const server = app.listen(PORT, () => console.log(`Task API running on http://localhost:${PORT}`));
