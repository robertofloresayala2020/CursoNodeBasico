
const fs =  require('fs');


const CrearArchivoMultiplicar = async (base)=>
{

    let salida ='' ;
    try 
    {
        for(i=1;i<=10;i++)
        salida +=`${base} X  ${i} = ${ base * i } \n`;        

        /*****File system desde java script******/
        fs.writeFileSync(`Tabla-${base}.txt`,salida);
        return  `Tabla-${base}.txt`;
    
    } 
    catch (error) 
    { 
        throw error
    }
    
    
}

const CrearArchivoMultiplicarDos = async (b, l,h)=>
{

    let salida ='' ;
    try 
    {
        for(i=1;i<=h;i++)
        {
            salida +=`${b} X  ${i} = ${ b * i } \n`;        
            
            if(l===true)
             console.log(salida);
        }
        
        /*****File system desde java script******/
        fs.writeFileSync(`./salida/Tabla-${b}.txt`,salida);
        return  `Tabla-${b}.txt`;
    
    } 
    catch (error) 
    { 
        throw error
    }
    
    
}



    
module.exports= 
{
        CrearArchivo: CrearArchivoMultiplicar,
        CrearArchivoMultiplicarDos:CrearArchivoMultiplicarDos
}      
