/*global require*/
"use strict";

var gulp = require('gulp'),
  path = require('path'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  //uglify = require('gulp-uglify'),
  htmlbeautify = require('gulp-html-prettify'),
  notify = require('gulp-notify'),
  svgstore = require('gulp-svgstore'),
  browserSync = require('browser-sync').create(),
  gutil = require( 'gulp-util' ),
  ftp = require( 'vinyl-ftp' );


/*
 * Directories here
 */
var paths = {
  public: './public/',
  development: './iash/wp-content/themes/sigillum/css/',
  sass: './src/sass/',
  bower: './bower_components/',
  css: './public/css/',
  data: './src/_data/',
  scripts: './src/js/',
  icons: './src/icons/'
};

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', function () {
  return gulp.src('./src/*.pug')
    .pipe(data(function (file) {
      return require(paths.data + path.basename(file.path) + '.json');
    }))
    //.pipe(gulpPugBeautify({ omit_empty: true }))
    .pipe(pug())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(htmlbeautify())
    .pipe(gulp.dest(paths.public))
    ;
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug'], function () {
  browserSync.reload();
});

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug'], function () {
  // browserSync({
  //   server: {
  //     baseDir: paths.public
  //   },
  //   notify: false
  // });
    browserSync.init({
        proxy: "http://sigillum.local/",
        notify: true
    });
    gulp.watch('wp-content/themes/sigillum/css/*').on('change', browserSync.reload);
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('development', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest(paths.development))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts + '*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(gulp.dest('public/js'))
      .pipe(notify({ message: 'Scripts task complete' }))
      .pipe(browserSync.reload({
        stream: true
      }));
});

/**
 * Svg icons aggregation into one file
 * */
gulp.task('svgstore', function () {
    return gulp
        .src('src/icons/*.svg')
        .pipe(svgstore())
        .pipe(gulp.dest('public/img'));
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass', 'development']);
  gulp.watch(paths.sass + '*.scss', ['sass', 'development']);
  gulp.watch(paths.sass + 'pages/*.scss', ['sass', 'development']);
  gulp.watch(paths.bower + 'css-hamburgers/**/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch(paths.scripts + '*.js', ['scripts']);
});

// Build task compile sass and pug.
gulp.task('build', ['sass', 'pug']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch']);


gulp.task('deploy', function() {
    var conn = ftp.create( {
        host:     'sterli00.ftp.tools',
        user:     'sterli00_ftp',
        password: 'Rk8S4i78Ns',
        parallel: 10,
        log:      gutil.log
    } );
    var globs = [
        'public/css/**'
    ];
    return gulp.src( globs, { base: 'public/css/', buffer: false } )
        .pipe( conn.newer( '/sigillum.com.ua/www/wp-content/themes/sigillum/css' ) ) // only upload newer files
        .pipe( conn.dest( '/sigillum.com.ua/www/wp-content/themes/sigillum/css' ) );
});
