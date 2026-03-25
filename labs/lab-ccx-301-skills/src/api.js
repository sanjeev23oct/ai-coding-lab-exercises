// Sample Express API — used as the codebase to audit and document
const express = require('express');

const app = express();
app.use(express.json());

// WARNING: intentional security issues for the audit exercise
const users = [{ id: 1, name: 'Alice', role: 'admin' }];

// Issue 1: SQL injection style (string concatenation in query)
app.get('/api/users', (req, res) => {
  const query = `SELECT * FROM users WHERE name = '${req.query.name}'`; // unsafe
  res.json({ query, users });
});

// Issue 2: Missing input validation
app.post('/api/users', (req, res) => {
  const user = { id: Date.now(), ...req.body }; // no validation
  users.push(user);
  res.status(201).json(user);
});

// Issue 3: Hardcoded secret
const API_SECRET = 'sk-prod-abc123xyz'; // should be in env var

app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;
