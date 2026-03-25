/**
 * Validates that required fields are present in req.body.
 * Usage: validate(['title', 'priority'])
 */
function validate(fields) {
  return (req, res, next) => {
    const missing = fields.filter(f => !req.body[f]);
    if (missing.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
    }
    next();
  };
}

module.exports = { validate };
