const argv = require('yargs')
        .option('b',{
                alias:'base',
                type :'number',
                demandOption:true,
                describe:'Es la base de la tabla de multiplicar'
                    },
                )
         .option('l',
                {
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    

                })
                .option('h',
                {
                    alias:'limite',
                    type:'number',
                    default:1,
                    demandOption:true,
                    describe:'Es el limite de la tabla'

                }
                )
        .check((argv,options)=>
        {
            if(isNaN(argv.b))
                throw 'La base tiene que ser un número';   
            else if(isNaN(argv.h))
                throw 'La base tiene que ser un número';   
            
            return true;
                
        })
        .argv;


            
module.exports= argv;


