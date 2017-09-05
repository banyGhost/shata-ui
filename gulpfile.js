var gulp = require('gulp'),
  postcss = require('gulp-postCss'),
  autoprefixer = require('autoprefixer'),
  cssnext = require('cssnext'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  precss = require('precss');

gulp.task('less', function() {
  var processors = [autoprefixer, cssnext, precss];
  return gulp.src('./src/less/*.less')
    .pipe(postcss(processors))
    .pipe(less())
    .pipe(gulp.dest('./src/css'))
    .pipe(connect.reload())
});

gulp.task('componentless', function() {
  var processors = [autoprefixer, cssnext, precss];
  return gulp.src('./src/less/components/*.less')
    .pipe(postcss(processors))
    .pipe(less())
    .pipe(gulp.dest('./src/css'))
});

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('connect', function() {
  connect.server({
    port: 9991,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['./src/less/*.less'], ['less']);
  gulp.watch(['./src/less/components/*.less'], ['componentless', 'less']);
  gulp.watch(['./src/less/variable/*.less'], ['componentless', 'less']);
});

gulp.task('default', ['connect', 'watch']);