let gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    del    = require('del');

let watchScripts = gulp.watch('src/js/**/*.js');
let watchStyles = gulp.watch('src/sass/**/*.scss');

// -----------
// DEVELOPMENT
// -----------

/* basic implementation of some tasks.
   will improve with more functionality later. (clean, uglify, etc)
*/

gulp.task('dev', function(){
  watchScripts.on('all', function(event, path, stats) {
    gulp.src('src/js/**/*.js').pipe(concat('app-concat.js'))
                              .pipe(gulp.dest('dist/public/js/'));
  });

  watchStyles.on('all', function(event, path, stats) {
    gulp.src('src/sass/**/*.scss').pipe(concat('stylesheet-concat.css'))
                                  .pipe(sass({sourcemap: true}))
                                  .on('error', sass.logError)
                                  .pipe(gulp.dest('dist/public/css/'));
  });
});