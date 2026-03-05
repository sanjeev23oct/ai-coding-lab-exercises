const express = require('express');
const { tasksRouter } = require('./routes/tasks');
const { authMiddleware } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Public routes
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Protected routes
app.use('/api', authMiddleware);
app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`TaskFlow API running on port ${PORT}`);
});

module.exports = app;
