var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var remToPx = require("gulp-rem-to-px");

gulp.task("sass", function () {
  return gulp
    .src("css/hubspot-form.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(
      remToPx({
        fontSize: 16,
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("scripts", function () {
  return gulp
    .src(["js/main-search.js"])
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function () {
  gulp.watch("css/**/*.scss", gulp.series("sass"));
  gulp.watch("js/main-search.js", gulp.series("scripts"));
  // Other watchers
});
