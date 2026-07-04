#!/usr/bin/env node
/*
 * Build step for Cutting Edge Landscaping.
 *
 * Compiles the JSX source (src/app.jsx) into a plain-JavaScript bundle
 * (assets/app.js) so the site renders instantly at runtime with NO
 * in-browser Babel and NO external CDN requests. React, ReactDOM and
 * Framer-Motion are vendored under assets/vendor/ and loaded as ordinary
 * <script defer> tags before assets/app.js.
 *
 * Usage:
 *   npm install        # installs @babel/core + @babel/preset-react (dev only)
 *   npm run build      # regenerates assets/app.js from src/app.jsx
 *
 * Only src/app.jsx is edited by hand; assets/app.js is generated — do not
 * edit it directly.
 */
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const SRC = path.join(__dirname, 'src', 'app.jsx');
const OUT = path.join(__dirname, 'assets', 'app.js');

const source = fs.readFileSync(SRC, 'utf8');

const { code } = babel.transformSync(source, {
  filename: 'app.jsx',
  presets: [['@babel/preset-react', { runtime: 'classic' }]],
  compact: false,
  comments: false,
});

const banner =
  '/* Generated from src/app.jsx by build.js — do not edit directly. */\n' +
  '"use strict";\n';

fs.writeFileSync(OUT, banner + code + '\n');
console.log('Wrote ' + path.relative(__dirname, OUT) + ' (' + code.length + ' bytes of JS)');
