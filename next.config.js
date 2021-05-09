// next.config.js
const withImages = require('next-images');

module.exports = withImages({
  distDir: 'build',
  target: 'serverless',
  images: {
    domains: [`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_KEY}/image/upload/q_auto,f_auto/${process.env.NEXT_PUBLIC_CLOUDINARY_PATH}/my-jam`]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }
    return config;
  },
});
