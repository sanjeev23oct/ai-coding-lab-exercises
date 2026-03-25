// API key auth — DO NOT modify this file
const VALID_KEYS = new Set(['dev-key-123', 'test-key-456']);

function auth(req, res, next) {
  const key = req.headers['x-api-key'];
  if (!key || !VALID_KEYS.has(key)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

module.exports = { auth };
