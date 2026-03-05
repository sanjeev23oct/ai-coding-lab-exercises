// Simple API key auth middleware
// In production, use JWT. For this lab, a static key is fine.
const VALID_API_KEYS = ['dev-key-123', 'test-key-456'];

function authMiddleware(req, res, next) {
    const key = req.headers['x-api-key'];
    if (!key || !VALID_API_KEYS.includes(key)) {
        return res.status(401).json({ error: 'missing or invalid API key' });
    }
    next();
}

module.exports = { authMiddleware };
