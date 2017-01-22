'use strict'
var gulp = require('gulp');
var modify = require('./myPlugin/modify2');

gulp.task('modify', function(){
	return gulp.src('./index.html')
	           .pipe(modify())
			   .pipe(gulp.dest('dest/'));
});