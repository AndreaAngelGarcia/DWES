//READLINE
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('*******Bienvenido al editor de notas********\n1. Crear nueva nota\n2. Editar nota existente\n3. Eliminar nota\n\nElija una opción\n', (answer) => {
   
    //CREAR NOTA
    if (answer == 1) {
        console.log('Has introducido "Crear nota"');

            rl.question('Introduzca el nombre de la nota:\n\n', function (name){
    
                rl.question('Introduzca el contenido de la nota:\n\n', function (contenido){
    
                    var fs = require('fs');
    
                        fs.writeFile(name +'.note', contenido, function (err) {
                        if (err) throw err;
                        console.log('Nota Creada!');
                    });
    
                    rl.close();
                });    
            });
        
    //EDITAR NOTA
    } else if(answer == 2) {
        console.log('Archivos en la carpeta: ');
        //Primero leemos todos los archivos que hay en la carpeta

        const fs = require('fs');

        var files = fs.readdirSync("./");

        console.log(files);

        //Mostramos lo que hay en el archivo elegido
        try {
            rl.question('Introduzca el archivo que quiera elegir:\n\n', function (archivo){

                var texto = fs.readFileSync(archivo, {encoding:"utf-8"});

                console.log("\nEl archivo elegido contiene la siguiente informacion: \n");

                console.log(texto);

                console.log("\n");
            
            //Editamos el archivo elegido
            rl.question('Introduzca el nuevo contenido:\n\n', function (nuevoContenido){

                fs.writeFile(archivo, nuevoContenido, function (err) {

                    if (err) throw err;
                    console.log('Contenido editado!\n\n');

                    console.log('El nuevo contenido es:\n');

                    var texto1 = fs.readFileSync(archivo, {encoding:"utf-8"});

                    console.log(texto1);

                    rl.close();
                }); 
            });
        });

        } catch(error){
            console.log('Introduce un archivo existente');
            rl.close();

        };
        

    //BORRAR NOTA
    } else if (answer == 3) {
        console.log('Has introducido "Eliminar nota"');
        rl.close();
    } else {
        console.log('No has introducido correctamente los datos');
        rl.close();
    }

});
