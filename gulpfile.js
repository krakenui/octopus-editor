const gulp = require("gulp");

gulp.task("bundle", (done) => {
  // copy dist folder
  gulp
    .src(["*.json", "*.md", ".*rc"])
    .pipe(gulp.dest("dist"));

  done();
});
