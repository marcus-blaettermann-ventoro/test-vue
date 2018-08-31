const GitRevisionPlugin = require('git-revision-webpack-plugin');

const {
  VUE_APP_NAME,
  NODE_ENV,
  BABEL_ENV,
} = process.env;

const isProduction = NODE_ENV === 'production' || BABEL_ENV === 'production';
const vueAppVersion = new GitRevisionPlugin({
  versionCommand: 'describe --long --tags --first-parent --always',
}).version();

process.env.VUE_APP_VERSION = vueAppVersion;

process.env.VUE_APP_TITLE = isProduction ?
  VUE_APP_NAME
  : [vueAppVersion, VUE_APP_NAME].join(' - ');

module.exports = {
  chainWebpack: (config) => {
    'use strict';

    config
      .entry('app')
      .clear()
      .add('./src/main.ts')
      .end();

    config
      .performance
      .set('hints', false);
  },
  productionSourceMap: false,
  transpileDependencies: [
    '@ventoro/*',
    'bootstrap-vue',
  ],
};
