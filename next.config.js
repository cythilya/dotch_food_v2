const withCSS = require('@zeit/next-css');
const zlib = require('zlib');
const iltorb = require('iltorb');
const withOffline = require('next-offline');

module.exports = withOffline(withCSS({
  postcssLoaderOptions: {
    parser: true,
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
}));
