

/*node .\app.js --version */
/*node .\app.js --help */
const { option } = require('yargs');
const {CrearArchivo, CrearArchivoMultiplicarDos} = require('./Helpers/Mulitplicar');
const argv = require ('./config/yargs')



    console.log(argv.b);
    console.log(argv.l);


        CrearArchivoMultiplicarDos(argv.b,argv.l,argv.h)
            .then( nombreArchivo=> console.log(nombreArchivo,'creado'))
            .catch(error=> console.log(error))

    





/********Obtencion de parametros y creación de un archivo******* */
/*Eejecuta desde la consola  node .\app.js --base=6

const argv = require('yargs').argv
console.clear();
console.log(process.argv);
console.log(argv);
console.log(argv.base); 

let salida ='' ;

const [ , ,arg3 ='base=1']  = process.argv;
const[ , nuevabase] = arg3.split('=');
const base = nuevabase;


CrearArchivo(base)
    .then( nombreArchivo=> console.log(nombreArchivo,'creado'))
    .catch(error=> console.log(error))

  */  
 

