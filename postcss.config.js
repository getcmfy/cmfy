/* PostCSS Config */

module.exports = {
  plugins: [
    require('postcss-import')({ path: ['./src/assets/styles'] }),
    require('cssnano')({
      preset: 'default',
  }),
  ],
};