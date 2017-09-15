var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.task('minifyScripts', function() {
    return gulp
        .src(['scripts/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyCss', function() {
    return gulp
        .src(['./css/reset.css', './css/*css'])
        .pipe(concat('style.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('compressImages', function() {
    return gulp
    .src(['imgs/**/*.png', 'imgs/**/*.jpg'])
    .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
    .pipe(gulp.dest('dist/imgs'));
});

gulp.task('watchScripts', function() {
    gulp.watch('scripts/**/*.js', function(event) {
        gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('minifyScripts');
    })
});