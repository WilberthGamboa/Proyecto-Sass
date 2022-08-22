//COMPILAR ARCHIVOS SCSS CON GULP 
const {src, dest,watch, parallel} = require('gulp'); //EXTRAE LA FUNCIONAL DEL JSON GULP
//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//IMAGENES
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require ('gulp-webp');

//src permite identificar un archivo 
//dest sirve para guardarlo 
// igual está la funcion de watch

function css(done){
    //Indentificar el archivo SASS
    //Aquí utilizaremos pipe, identifica una acción que se realiza después de otra
    //src('src/scss/app.scss').pipe(sass()).pipe(dest("build/css"))  , cambiaremos la sintaxis para que escuche todas
    src('src/scss/**/*.scss')
   .pipe(plumber()) //No detiene la ejecucion incluso si hay errores
    .pipe(sass())
    .pipe(dest("build/css"))
    .pipe(plumber.stop())

    done(); //Call back que avisa a gulp cuando lleguamos al final
}

function imagenes(done){
        const opciones = {
            optimizationLevel:3
        }
    src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'))
    done();
}

function versionWebp(done){
    const opciones ={
        quality:50
    };
    
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
        done();
}
function dev(done){
   // watch("src/scss/app.scss",css)  cambiaremos la sintaxis para que escuche todas
   watch('src/scss/**/*.scss',css)
    done();
}

exports.css=css;
exports.imagenes= imagenes;
exports.versionWebp = versionWebp;

exports.dev=parallel(imagenes,versionWebp,dev);