const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  postcssLoaderOptions: {
    parser: true,
    config: {
      ctx: {
        theme: JSON.stringify(process.env.REACT_APP_THEME),
      },
    },
  },
});
