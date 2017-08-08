var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');


gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','assets/js/*.js'])
		.pipe(concat('script.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('style',function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css','assets/sass/main.scss'])
		.pipe(sass().on('error',sass.logError))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});


gulp.task('default',['script','style']);