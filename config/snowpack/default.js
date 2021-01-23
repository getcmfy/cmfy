// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  'mount': {
    'public': '/',
    'src': '/dist',
  },
  'buildOptions': {
    'clean': true,
  },
  'devOptions': {
    'secure': true,
    'port': 8000,
  },
  'plugins': [
      '@snowpack/plugin-typescript',
      '@snowpack/plugin-babel',
      [
        '@snowpack/plugin-dotenv',
        {
          'path':'./config/env'
        }
      ],
      [
        '@snowpack/plugin-optimize', 
        {
          'preloadModules':true,
          'preloadCSS': true
        }
      ]
  ],
  'packageOptions': {
    'installTypes': true,
  },
};
