var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var cleanCSS = require('gulp-clean-css');


gulp.task('styles', function() {
  gulp.src('public/stylesheets/*.scss')
	  .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('cleanCSS', function(){
  gulp.src('public/sylesheets/*.css')
	  .pipe(cleanCSS())
		.pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('default', function(){
  gulp.watch('public/stylesheets/*.scss', ['styles']); 
});
