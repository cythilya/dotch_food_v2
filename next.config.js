const withCSS = require('@zeit/next-css');
const zlib = require('zlib');
const iltorb = require('iltorb');

module.exports = withCSS({
  postcssLoaderOptions: {
    parser: true,
    config: {
      ctx: {
        theme: JSON.stringify(process.env.REACT_APP_THEME),
      },
    },
  },
  compress: {
    br() {
      return iltorb.compressStream();
    },
    gzip() {
      return new Promise((resolve) => {
        resolve(zlib.createGzip());
      });
    },
  },
});
