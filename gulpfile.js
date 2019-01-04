var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

function generateTemplateCache() {
  gulp
    .src('./src/app/**/*.html')
    .pipe(plug.htmlmin({
        collapseWhitespace: true
    }))
    .pipe(plug.angularTemplatecache('templates.ts', {
        module: 'ngaApp.core',
        standalone: false,
        root: 'app/'
    }))
    .pipe(gulp.dest('./src/app/'))
}

gulp.task('templatecache', function () {
  plug.watch('./src/app/**/*.html', { ignoreInitial: false }, function(events, done) {
    generateTemplateCache();
  });
});

gulp.task('templatecache:build', function () {
  generateTemplateCache();
});
