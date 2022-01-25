// next.config.js
const withImages = require('next-images');
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = withImages({
  distDir: 'build',
  target: 'serverless',
  images: {
    domains: ['res.cloudinary.com'],
    disableStaticImages: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@components": resolvePath('components'),
          "@contexts": resolvePath('contexts'),
          "@hooks": resolvePath('hooks'),
          "@pages": resolvePath('pages'),
          "@templates": resolvePath('templates'),
          "@lib": resolvePath('lib'),
          "@config": resolvePath('config'),
          "@mocks-data": resolvePath('mocks-data'),
          "@images": resolvePath('images'),
          "@utils": resolvePath('utils'),
        },
        fallback: {
          fs: false
        },
      };
    }
    return config;
  },
});

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

function resolvePath(dir) {
  return path.join(__dirname, `src/${dir}`);
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
