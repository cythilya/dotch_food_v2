const gulp = require('gulp');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');

const config = {
  mode: {
    symbol: true,
  },
};

gulp.task('default', ['icons']);

gulp.task('watch', () => {
  gulp.watch(['assets/images/svg/*.svg'], ['icons']);
});

// svg sprites
gulp.task('icons', () => {
  gulp.src('assets/images/svg/*.svg', { cwd: '' })
    .pipe(plumber())
    .pipe(svgo())
    .pipe(svgSprite(config))
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest('style/generals/sprites/'));
});
