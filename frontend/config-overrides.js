const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@components': path.resolve(__dirname, './src/components'),
    '@configs': path.resolve(__dirname, './src/configs'),
    '@containers': path.resolve(__dirname, './src/containers'),
    '@images': path.resolve(__dirname, './src/images'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@routes': path.resolve(__dirname, './src/routes'),
    '@services': path.resolve(__dirname, './src/services'),
    '@store': path.resolve(__dirname, './src/store'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@utils': path.resolve(__dirname, './src/utils')
  })
);
