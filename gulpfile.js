const { src, dest, watch } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
//css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); //evitar que se deje de ejecutar el workflow cuando se coloque algo que no se utilice
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

//JS
const terser = require("gulp-terser-js");
//Dependencias para imagenes
const imagemin = require( 'gulp-imagemin' );
const cache = require( 'gulp-cache' );
const webp = require( 'gulp-webp' );
const avif = require( 'gulp-avif' );


function compilarSass(done) {
  //identificar el scss a compilar
  return src("src/SASS/**/*")
    // .pipe(plumber())
    .pipe( sourcemaps.init() )
    .pipe(sass()) //compilarlo
    .pipe( postcss( [autoprefixer(), cssnano()  ] ) )
    .pipe( sourcemaps.write(".") )
    .pipe(dest("build/css")); //almacenarlo

  done(); //para que gulp sepa que es el final de la función
}

function aligerarImagenes(done){
 const opciones = {
   optimizationLevel: 3 
 }
  src( 'src/img/**/*.{png,jpg}' )
  .pipe( cache( imagemin(opciones) ) )
  .pipe( dest('build/img') )
  done();
}

function convertirWebp(done){
  const opciones = {
    quality: 50
  };
   src( 'src/img/**/*.{png,jpg}' )  //buscar esos dos formatos
  .pipe( webp(opciones) )
  .pipe( dest('build/img') )
  done();
}

function convertirAvif(done){
  const opciones = {
    quality: 50
  };
   src( 'src/img/**/*.{png,jpg}' )  //buscar esos dos formatos
  .pipe( avif(opciones) )
  .pipe( dest('build/img') )
  done();
}

function javascript (done){
   src('src/JS/main.js')
   .pipe( sourcemaps.init() )
   .pipe( terser() )
   .pipe( sourcemaps.write("."))
    .pipe( dest('build/js') )

  done();
}

function watchArchivos(done) {
  watch("src/SASS/**/*.scss", compilarSass);
  watch("src/JS/main.js", javascript);

  done();
}
exports.compilarSass = compilarSass;
exports.javascript = javascript;
exports.aligerarImagenes = aligerarImagenes;
exports.convertirWebp = convertirWebp;
exports.convertirAvif = convertirAvif;
exports.watchArchivos = watchArchivos;
