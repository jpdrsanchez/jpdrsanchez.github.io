// ===========================================================
// Gulpfile - FrontEnd Boilerplate
//
// 1. Modules
// 2. File Paths
// 3. Tasksc
// 4. Exports
//
// ===========================================================


// -----------------------------------------------------------
// 1. Modules - Initialize modules
// -----------------------------------------------------------

// Importing specific gulp API functions
const { src, dest, series, parallel, watch } = require('gulp'); 

// Sass/Css Modules
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cmq = require('postcss-combine-media-query');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Javascript Modules
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Image Modules
const imagemin = require('gulp-imagemin');

// -----------------------------------------------------------
// 2. File Paths
// -----------------------------------------------------------
const files = {
  scssPath: './src/scss/**/*.scss',
  jsPath: './src/js/**/*.js',
  imgPath: './src/img/**/*'
}

// -----------------------------------------------------------
// 3. Tasks - Create scss, js and watch tasks
// -----------------------------------------------------------
function scss() {
  return src(files.scssPath, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      cmq(),
      cssnano() 
    ]))
    .pipe(dest('./dist/css', { sourcemaps: '.' }))
}

function js() {
  return src(files.jsPath, { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('./dist/js', { sourcemaps: '.' }))
}

function image(){
  return src(files.imgPath)
      .pipe(imagemin([
              imagemin.gifsicle({interlaced: true}),
              imagemin.mozjpeg({quality: 75, progressive: true}),
              imagemin.optipng({optimizationLevel: 5}),
              imagemin.svgo({
                  plugins: [
                      {removeViewBox: true},
                      {cleanupIDs: false}
                  ]
              })
          ], 
          { verbose: true }
      ))
      .pipe(dest('./dist/img'));
}

function watchTask() {
  watch([files.scssPath, files.jsPath], parallel(scss, js)); 
  watch([files.imgPath], parallel(image));
}

// -----------------------------------------------------------
// 4. Exports - Exports the tasks
// -----------------------------------------------------------
exports.scss = scss;
exports.js = js;
exports.image = image;
exports.watch = watchTask;
exports.default = parallel(scss, js, image, watchTask);