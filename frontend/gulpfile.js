var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('css', function(){
  return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
  return gulp.src([
  			'js/jquery.js',
  			'js/bootstrap.js',
  			'js/moment.js',
  			'js/app.js'
		])
  	.pipe(concat('app.js'))
  	.pipe(uglify())
  	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['css', 'js'], function(){
    gulp.watch('sass/*.scss', ['css']);
    gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);
