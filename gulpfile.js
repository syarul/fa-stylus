var gulp = require('gulp')
,	stylus = require('gulp-stylus')
,	stylint = require('gulp-stylint')
,	faStylus = require('./index')
,	shell = require('gulp-shell')

gulp.task('clean', function () {
  return gulp.src('')
  .pipe(shell(['rm -rf test/*.css']));
});

gulp.task('test', function () {
    return gulp.src('test/*.styl')
        .pipe(stylint())
        .pipe(stylus({ use: [ 
        	faStylus()
        ]}))
        .pipe(gulp.dest('./test'))
});

gulp.task('default', ['clean', 'test']);