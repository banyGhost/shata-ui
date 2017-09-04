var gulp = require('gulp'),
  minifycss = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  less = require('gulp-less'),
  connect = require('gulp-connect'),
  notify = require('gulp-notify');

// less to css
gulp.task('less2css', function() {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/css'))
    .pipe(notify({ message: 'less2css task ok' }));
});

gulp.task('css', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dest/css'))
    .pipe(rename({ suffix: '.min' }))
    // .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({ message: 'css task ok' }));
});

// 默认任务
gulp.task('default', function() {

  gulp.run('less2css', 'css');

});