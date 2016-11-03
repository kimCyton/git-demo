'use strict';

var gulp = require("gulp");
var less = require('gulp-less');

gulp.task("copy",function(){
	gulp.src("src/index.html")
		.pipe(gulp.dest("dist/"));
});//复制文件到gulp.dest()

gulp.task("dist",function(){
	gulp.watch("src/index.html",["copy"]);
	gulp.watch("src/styles/*.less",["style"])
})//监控文件的copy行为


gulp.task("style", function () {
	gulp.src('src/styles/*.less')
    .pipe(less())	//转成css文件了
    .pipe(gulp.dest('dist/css/'));
});
/*
var csscomb = require('gulp-csscomb');
 
gulp.task('styles', function() {
  gulp.src('src/styles/main.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./build/css'));
});*/
var browserSync = require("browser-sync").create();
//Static server
gulp.task("serve",function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
});