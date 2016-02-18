var gulp = require('gulp');
var polybuild = require('polybuild');

gulp.task('default', function() {
  gulp.src('../fonepush/public/ui/elements/fp-app/fp-app.html')
  .pipe(polybuild({maximumCrush: true, suffix: 'build'}))
  .pipe(gulp.dest('build'));

  gulp.src('../fonepush/public/ui/elements/fp-public/fp-public.html')
  .pipe(polybuild({maximumCrush: true, suffix: 'build'}))
  .pipe(gulp.dest('build'));

  return gulp.src('../fonepush/public/ui/elements/fp-user-register/fp-user-register.html')
  .pipe(polybuild({maximumCrush: true, suffix: 'build'}))
  .pipe(gulp.dest('build'));
});
