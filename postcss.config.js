const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport({ path: ['./src/assets/styles'] })
  ],
};