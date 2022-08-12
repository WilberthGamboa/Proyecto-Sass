//COMPILAR ARCHIVOS SCSS CON GULP 
const {src, dest,watch} = require("gulp"); //EXTRAE LA FUNCIONAL DEL JSON GULP
const sass = require("gulp-sass")(require('sass'));
//src permite identificar un archivo 
//dest sirve para guardarlo 
// igual está la funcion de watch

function css(done){
    //Indentificar el archivo SASS
    //Aquí utilizaremos pipe, identifica una acción que se realiza después de otra
    //src('src/scss/app.scss').pipe(sass()).pipe(dest("build/css"))  , cambiaremos la sintaxis para que escuche todas
    src('src/scss/**/*.scss').pipe(sass()).pipe(dest("build/css"))

    done(); //Call back que avisa a gulp cuando lleguamos al final
}

function dev(done){
   // watch("src/scss/app.scss",css)  cambiaremos la sintaxis para que escuche todas
   watch('src/scss/**/*.scss',css)
    done();
}

exports.dev=dev;
exports.css=css;