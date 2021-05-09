// next.config.js
const withImages = require('next-images');

module.exports = withImages({
  distDir: 'build',
  target: 'serverless',
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }
    return config;
  },
});
