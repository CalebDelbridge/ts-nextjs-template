const withPlugins = require('next-compose-plugins');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = withPlugins([], {
  experimental: {
    optionalCatchAll: true,
  },
  webpack: (config) => {
    (config.optimization.minimize = true),
      (config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ]);
    return config;
  },
});
