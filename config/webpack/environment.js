const path = require('path');
const version = require('../../package.json')

module.exports = {
  paths: {
    /* Path to source files directory */
    source: path.resolve(__dirname, '../../src/'),
    /* Path to source files directory */
    public: path.resolve(__dirname, '../../public/'),
    /* Path to built files directory */
    output: path.resolve(__dirname, '../../dist/'),
  },
  server: {
    host: 'localhost',
    port: 8000,
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    images: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
};
