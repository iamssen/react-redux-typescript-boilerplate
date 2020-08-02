// devServer.js
const { devServerStart } = require('@ssen/webpack-dev-server');

const { devServer: devServerConfig, ...webpackConfig } = require('./webpack.config');

process.env.NODE_ENV = 'development';

(async () => {
  const port = 3000;

  await devServerStart({
    header: '\nHEADER TEXT\n',
    port,
    hostname: 'localhost',
    webpackConfig: {
      ...webpackConfig,
      mode: 'development'
    },
    devServerConfig
  });
})();
