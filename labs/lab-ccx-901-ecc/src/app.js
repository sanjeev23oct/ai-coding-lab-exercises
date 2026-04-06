'use strict';

const express = require('express');
const app = express();

app.use(express.json());

const products = require('./routes/products');
app.use('/products', products);

// Only start listening when run directly (not imported by tests)
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Products API running on port ${PORT}`));
}

module.exports = app;
