// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
const pkg = require('./package.json');
process.env. SNOWPACK_PUBLIC_PACKAGE_VERSION = pkg.version;

module.exports = {
  'extends': './config/snowpack/default.js',
  'alias':{
    '@app': './src',
    '@img': './src/assets/images',
    '@comp': './src/components',
  },
};
