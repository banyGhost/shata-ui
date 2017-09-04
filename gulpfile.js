var gulp = require('gulp'),
  postcss = require('gulp-postCss'),
  autoprefixer = require('autoprefixer'),
  cssnext = require('cssnext'),
  less = require('gulp-less'),
  precss = require('precss');

gulp.task('less', function () {
  var processors = [autoprefixer, cssnext, precss];
  return gulp.src('./src/less/*.less')
    .pipe(postcss(processors))
    .pipe(less())
    .pipe(gulp.dest('./src/css'))
});