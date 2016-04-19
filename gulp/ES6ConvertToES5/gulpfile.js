//引入gulp模块
var gulp = require('gulp');
//引入gulp-babel模块，用于转换ES6为ES5
var babel = require('gulp-babel');
//引入stream-combiner2捕获错误信息
var combiner = require('stream-combiner2');
//引入gulp-util模块，用于实现自定义颜色的log
var gutil = require('gulp-util');
//引入gulp-watch-path模块，用于监听
var watchPath = require('gulp-watch-path');
//捕捉异常
var handleError = function(err){
	var colors = gutil.colors;
	console.log('\n');
	gutil.log(colors.red('Error!'));
	gutil.log('fileName: ' + colors.red(err.fileName));
	gutil.log('lineNumber: ' + colors.red(err.loc.line));
	gutil.log('message: ' + err.message);
	gutil.log('plugin: ' + colors.yellow(err.plugin));
};
//默认任务
gulp.task('default', function(){
	gulp.watch('script/*.js', function(event){
		var paths = watchPath(event, 'script/', 'dist/');
		var combined = combiner.obj([
			gulp.src(paths.srcPath),
			babel(),
			gulp.dest(paths.distDir)
		]);
		combined.on('error', handleError);
	});
});     









