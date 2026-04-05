const express = require('express');
const notesRouter = require('./routes/notes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/notes', notesRouter);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`Notes API running on http://localhost:${PORT}`));
}

module.exports = app;
