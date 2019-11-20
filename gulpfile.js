const gulp = require('gulp');
const postcss = require('gulp-postcss');
const server = require('browser-sync').create();
const minify = require('gulp-csso');
const del = require('del');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const copy = require('gulp-copy');
const rigger = require('gulp-rigger');
const scss = require('gulp-sass');
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');

gulp.task("clean", function () {
    return del("build");
});

gulp.task("css", function () {
    return gulp.src("src/styles/main.scss")
        .pipe(plumber())
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(minify())
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("img", function () {
    return gulp.src("src/img/**/*")
        .pipe(gulp.dest("build/img"))
});

gulp.task('html', function() {
    return gulp
        .src("src/*.html")
        .pipe(rigger())
        .pipe(gulp.dest("build"))
});

gulp.task("js", function() {
    return gulp.src([
        "src/js/*.js",
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest("build/js"))
});


gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.task("refresh", function (done) {
        server.reload();
        done();
    });


    gulp.watch("src/styles/*.scss", gulp.series("css"));
    gulp.watch("src/img/*.{png,jpeg,jpg,svg}", gulp.series("img", "refresh"));
    gulp.watch("src/*.html", gulp.series("html", "refresh"));
    gulp.watch("src/templates/*.html", gulp.series("html", "refresh"));
    gulp.watch("src/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("build", gulp.series(
    "clean",
    "img",
    "css",
    "js",
    "html"
));

gulp.task("start", gulp.series("build", "server"));
