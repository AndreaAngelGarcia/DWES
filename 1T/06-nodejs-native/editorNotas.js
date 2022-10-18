const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('*******Bienvenido al editor de notas********\n1. Crear nueva nota\n2. Editar nota existente\n3. Eliminar nota\n\nElija una opción:\n', (answer) => {
   
    /* CREAR NOTA */
    if (answer == 1) {
        console.log('Has elegido "Crear nota"\n');

            rl.question('Introduzca el nombre de la nota:\n\n', function (name){
    
                rl.question('Introduzca el contenido de la nota:\n\n', function (contenido){
    
                    const fs = require('fs');
    
                        fs.writeFile(name +'.note', contenido, function (err) {
                        if (err) throw err;
                        console.log('Nota Creada!');
                    });
    
                    rl.close();
                });    
            });
        
    /* EDITAR NOTA */
    } else if(answer == 2) {
        console.log('Has elegido "Editar nota", estos son los archivos en la carpeta: ');

        //Primero leemos todos los archivos que hay en la carpeta
        const fs = require('fs');
        var files = fs.readdirSync("./");
        console.log(files);

        //Mostramos lo que hay en el archivo elegido
        rl.question('Introduzca la nota que quiera elegir:\n\n', function (archivo){

            var texto = fs.readFileSync(archivo, {encoding:"utf-8"});

            console.log('\nEl archivo elegido contiene la siguiente informacion: \n');

            console.log(texto);

            console.log("\n");
            
        //Editamos el archivo elegido
        rl.question('Introduzca el nuevo contenido:\n\n', function (nuevoContenido){

            fs.writeFile(archivo, nuevoContenido, function (err) {

                if (err) throw err;
                console.log('Contenido editado!\n\n');

                console.log('El nuevo contenido es:\n');

                //Leemos el contenido de la nota editada
                var texto1 = fs.readFileSync(archivo, {encoding:"utf-8"});
                console.log(texto1);

                rl.close();
            }); 
        });
    });
        
    /* BORRAR NOTA */ 
    } else if (answer == 3) {
        console.log('Has introducido "Eliminar nota", estas son las notas que puede elegir: \n');

            const fs = require('fs');
            var files = fs.readdirSync("./");
            console.log(files);

            rl.question('Introduzca la nota que quieras borrar: ', function(borrar){

                fs.unlink(borrar, function (err) {
                if (err) throw err;
                console.log('Archivo borrado!');

                rl.close();
                });
            });
    } else {
        console.log('No has introducido correctamente los datos.');
        rl.close();
    }
});
