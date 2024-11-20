const filesystem = require('fs')


//Quiero crear un mensaje que diga 'exito, archivo creado' cuando se cree el archivo
//Esto es una funcion/metodo asincronico
//La callback se ejecutara cuando writeFile se termine de ejecutar
filesystem.writeFile(
    'pepe.txt', 
    'hola mundo', 
    {encoding: 'utf-8'}, 
    (error) => {
        if(error){
            console.error(error)
        }
        else{
            console.log('exito arhivo creado')
        }
    }
)

filesystem.readFile(
    'no-existe.txt',
    'utf-8',
    (error, data) => {
        if(error){
            console.error('ERROR al leer el archivo', error)
        }
        else{
            console.log('contenido:', data)
        }
    }
)

//Van a crear un archivo txt que se llame primer-valor.txt, pondran dentro un 1
//Van a crear un archivo txt que se llame segundo-valor.txt, pondran dentro un 2
//Luego van a llamar al valor del primer archivo y guardaran en una variable llamada primer_valor
//Luego van a llamar al valor del segundo archivo y guardaran en una variable llamada segundo_valor
//Luego lo van a sumar y guardaran en archivo llamado resultado.txt el resultado de la suma de los valores

filesystem.writeFile('primer-valor.txt', '1', {encoding: 'utf-8'}, 
    () => {
        filesystem.writeFile(
            'segundo-valor.txt', 
            '2', 
            {encoding: 'utf-8'}, 
            ()=>{

            }
        )
    }
)