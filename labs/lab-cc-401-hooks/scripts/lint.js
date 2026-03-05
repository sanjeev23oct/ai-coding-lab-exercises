#!/usr/bin/env node
// Simple linter: checks for console.log in src/ files
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));

let issues = 0;
for (const file of files) {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        if (line.includes('console.log')) {
            console.error(`${file}:${i + 1}: no console.log allowed`);
            issues++;
        }
    });
}

if (issues > 0) {
    console.error(`\nLint failed: ${issues} issue(s) found`);
    process.exit(1);
} else {
    console.log('Lint passed ✓');
}
