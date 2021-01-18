const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const environment = require('./config/webpack/environment');

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, 'index.tsx'),
  },
  experiments: {
    asset: true
  },
  output: {
    path: environment.paths.output,
    filename: '[name].[fullhash].js',
    sourceMapFilename: '[name].chunk.map',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'webpack-preprocessor-pug-tsx',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash:6].[ext]',
              publicPath: 'img/',
              limit: environment.limits.images,
              esModule: false
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset',
        use: 'svgo-loader'
      },
    ],
  },
  plugins: [
    new DefinePlugin( {
      "process.env": dotenv.parsed,
      VERSION: JSON.stringify(require('./package.json').version)
    } ),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(environment.paths.public, 'index.html'),
      title: `${process.env.TITLE}`,
      desc: `${process.env.DESC}`,
      inject: 'body',
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(environment.paths.source, 'assets/images/cmfy.svg'),
      cache:true,
      inject:true,
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
    }),
  ],
  target: 'web',
};
