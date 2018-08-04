var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');
    rename = require('gulp-rename'),
    ignore = require('gulp-ignore'),
    changed = require('gulp-changed'),
    uglifyjs = require('uglify-es'),
    composer = require('gulp-uglify/composer'),
    minify = composer(uglifyjs, console);
    source = './src/',
    dest = './src/dist/';


var gothamFont = {
    in: source + "./fonts/gotham/"
};

var fonts = {
  in: [ gothamFont.in + '*' ],
    out: dest + 'fonts/'
}

var scss = {
    in: source + 'scss/critical.scss',
    out: dest + 'css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
    }
};

gulp.task('fonts', function () {
    return gulp
        .src(fonts.in)
        .pipe(gulp.dest(fonts.out));
});

gulp.task('copySassLibs', function() {
    var flexgrid = gulp.src(['node_modules/flexgrid-sass/assets/**/*']).pipe(gulp.dest(source + './scss/lib/flexgrid-sass/assets'));
});

gulp.task('copyJsLibs', function() {
    gulp.src([
        'node_modules/sticky-js/src/sticky.js'
    ]).pipe(gulp.dest('./js/lib'));
});

gulp.task('copyFontAwesomeScss', function() {
    var fontAwesomeScss = gulp.src(['node_modules/fontawesome-scss/fontAwesome.scss']).pipe(gulp.dest(source + './scss/lib/fontawesome-scss'));
});


gulp.task('sass', ['fonts','minify-sass'], function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(gulp.dest(scss.out))
});

gulp.task('minify-sass', ['fonts'], function () {
    return gulp.src(scss.in)
        .pipe(sass(scss.sassOpts))
        .pipe(minifyCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(scss.out))
});

gulp.task('minifyJs', function () {
    gulp.src(['./js/**/*.js', '!./js/**/*.min.js'])
        .pipe(changed(dest + 'js'))
    //    .pipe(minify({}))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(dest + 'js'));
});
gulp.task('js-watch', function () {
    gulp.watch(source + 'js/**/*.js', ['minifyJs']);
});

// default task
gulp.task('default', ['sass', 'minify-sass', 'copyJsLibs', 'minifyJs','js-watch'], function () {
    gulp.watch(scss.watch, ['sass']);
});

