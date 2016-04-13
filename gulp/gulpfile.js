//引入gulp
var gulp = require('gulp');
//引入gulp-uglify模块，用于压缩JS
var uglify = require('gulp-uglify');
//引入gulp-watch-path
var watchPath = require('gulp-watch-path');
//引入gulp-rename
var rename = require('gulp-rename');
//'firstScript'为我们自定义的任务名，匿名函数为'firstScript'具体任务
gulp.task('firstScript', function(){
    // 'script/*.js'是即将压缩的js文件
    gulp.src('script/*.js')
        //uglify()是调用的压缩方法，去压缩js
        .pipe(uglify())
        //给压缩后的文件，添加min后缀名
        .pipe(rename({suffix: '.min'}))
        //gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
        .pipe(gulp.dest('newScript'));        
});
//新增一个auto任务
gulp.task('auto', function(){
    //利用watch方法监听script下的js文件，如果变动，则执行firstScript任务
    //gulp.watch('script/*.js', ['firstScript']);
    //event为gulp.watch回调函数中的event
    gulp.watch('script/*.js', function(event){
        var paths = watchPath(event, 'script', 'newScript');
        gulp.src(paths.srcPath)
            .pipe(uglify())
            //给压缩后的文件，添加min后缀名
            .pipe(rename({suffix: '.min'}))
            //paths.distDir为目录文件，如果换成paths.distPath，会报错：file already exists
            .pipe(gulp.dest(paths.distDir));
    });
});
//将需要默认执行的任务名，添加到default任务中，如，添加上面的‘auto’任务
gulp.task('default',['auto']);