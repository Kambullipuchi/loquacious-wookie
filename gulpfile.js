(function () {

    'use strict';

    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        jshint = require('gulp-jshint'),
        concat = require('gulp-concat'),
        rev = require('gulp-rev'),
        usemin = require('gulp-usemin'),
        connect = require('gulp-connect'),
        copy = require('gulp-copy'),
        sourcemaps = require('gulp-sourcemaps'),
        del = require('del');


    gulp.task('minification',  ['clean'], function () {
        gulp.src('src/index.html')
            .pipe(usemin({
                libraries: [uglify(), rev()],
                javascripts: [sourcemaps.init(), jshint(), jshint.reporter('jshint-stylish'), ngAnnotate(), uglify(), rev(), sourcemaps.write('./')],
                stylesheets: [rev()]
            }))
            .pipe(gulp.dest('dist/'));
    });


    gulp.task('connect', function () {
        connect.server({
            root: 'dist/',
            port: 12345
        });
    });

    gulp.task('clean', function () {
        del('dist/**/*');
    });

    gulp.task('build', ['minification']);

    gulp.task('default', ['build']);

})();