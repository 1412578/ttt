var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('build', function() {
  return gulp.src('views/*.hbs')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true}))
    .pipe(gulp.dest('views/dist'));
});