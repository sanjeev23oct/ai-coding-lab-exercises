const express = require('express');
const { auth } = require('./middleware/auth');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/tasks', auth, tasksRouter);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

module.exports = app;
