module.exports = {
  plugins: {
    precss: {},
    autoprefixer: {
      browsers: [
        'Chrome >= 52',
        'FireFox >= 44',
        'Safari >= 7',
        'Explorer >= 11',
      ],
    },
    lost: {},
    'postcss-extend-rule': {},
  },
};
