const path = require('path')
const webpack = require('webpack')
const package = require('./package.json')

const cssConfig = {
  options: {
    modules: true,
    localIdentName: '[local]-[hash:base64:10]',
  },
}

module.exports = {
  type: 'react-app',

  webpack: {
    extra: {
      resolve: {
        modules: [path.resolve('./src'), 'node_modules'],
        extensions: ['.scss'],
      },
      output: {
        publicPath: '',
      },
      target: 'electron-renderer',
    },
    html: {
      template: path.resolve('./src/index.html'),
      title: package.name,
    },
    rules: {
      css: cssConfig,
      'sass-css': cssConfig,
    },
  },

  babel: {
    stage: 0,
  },
}
