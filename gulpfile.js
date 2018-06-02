var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var log = require('fancy-log');
var critical = require('critical').stream;

gulp.task('build', function() {
  return gulp.src('views/*.hbs')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true}))
    .pipe(gulp.dest('views/dist'));
});


 
// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('views/layout.hbs')
        .pipe(critical({base: 'views/', inline: true, css: ['assets/dist/layout.bundle.css']}))
        .on('error', function(err) { log.error(err.message); })
        .pipe(gulp.dest('dist'));
});