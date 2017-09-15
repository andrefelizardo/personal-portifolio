var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('minifyScripts', function() {
    return gulp
        .src(['scripts/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('watchScripts', function() {
    gulp.watch('scripts/**/*.js', function(event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('minifyScripts');
    })
});