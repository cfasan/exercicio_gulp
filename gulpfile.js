/*
O que está comentado com 'Ok' são os códigos que conseguie fazer sem consultar o material.
Aplicando os conceitos e a lógica. O que não está comentado são os códigos que eu tive que
rever o material ou assistir a algum vídeo novamente, pois foram muitos códigos (instala aqui, exporta lá... kk)
*/

const gulp = require('gulp'); // Ok
const gulpSass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // Ok
const uglify = require('gulp-uglify'); // Ok
const obfuscate = require('gulp-obfuscate'); // Ok
const sourcemaps = require('gulp-sourcemaps');

function compilarSass(){ // Ok
    return gulp.src('./source/styles/main.scss') // Ok
        .pipe(sourcemaps.init())
        .pipe(gulpSass({
            outputStyle: 'compressed'
        })) // Ok
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles/')); // Ok
};

function comprimirJS(){ // Ok
    return gulp.src('./source/scripts/*.js') // Ok
    .pipe(uglify()) // Ok
    .pipe(obfuscate()) // Ok
    .pipe(gulp.dest('./build/scripts')); // Ok
};

function comprimirImagens(){ // Ok
    return gulp.src('./source/images/*') // Ok
    .pipe(imagemin()) // Ok
    .pipe(gulp.dest('./build/images')); // Ok
};

exports.default = function(){
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, gulp.series(compilarSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimirJS));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimirImagens));
};

