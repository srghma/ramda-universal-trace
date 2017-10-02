'use strict'

const gulp = require('gulp')
const ts = require('gulp-typescript')
const merge = require('merge2')
const sourcemaps = require('gulp-sourcemaps')

const files = {
  tsWithoutTest: ['./src/**/*.ts'],
}

function onBuildError() {
  this.once('finish', () => process.exit(1))
}

function build(dest, module) {
  return () => {
    const tsProject = ts.createProject('tsconfig.json', {
      noEmitOnError: true,
      declaration: true,
      target: 'es5',
      module,
    })
    const tsResult = gulp
      .src(files.tsWithoutTest)
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .once('error', onBuildError)
    return merge([
      tsResult.dts.pipe(gulp.dest(dest)),
      tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest(dest)),
    ])
  }
}

gulp.task('es', build('es', 'es6'))
gulp.task('lib', build('lib', 'commonjs'))

gulp.task('default', ['es', 'lib'])
