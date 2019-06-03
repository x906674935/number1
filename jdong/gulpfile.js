const gulp = require("gulp");

gulp.task("copyHtml",() => {
    //需要复制的文件
    gulp.src('./src/index.html')
    //管道运输，顺带加工
    .pipe(gulp.dest('./dist'))
    
})

const imgmin = require('gulp-imagemin');
gulp.task('imgmin',() => {
    gulp.src('./src/images/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./dist/image'))
})

const jsmin = require('gulp-uglify')
gulp.task('jsmin',() => {
    gulp.src('./src/js/js/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('./dist/js/js'))
})

gulp.task('default',['copyHtml','imgmin'])