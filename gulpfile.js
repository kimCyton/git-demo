'use strict';

var gulp = require("gulp");
var less = require('gulp-less');

//启动服务器
var connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
	root: 'dist', //当前项目主目录
	livereload:true	//同步
  });
});
 
gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(connect.reload());
});

gulp.task("copy",function(){
	gulp.src("src/index.html")
		.pipe(gulp.dest("dist"))
})
 
gulp.task('watch', function () {
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/index.html', ['copy']);
});
 
gulp.task('server', ['connect', 'watch']);