//READLINE
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('*******Bienvenido al editor de notas********\n1. Crear nueva nota\n2. Editar nota existente\n3. Eliminar nota\n', (answer) => {
    if (answer == 1) {
        console.log('Has introducido "Crear nota"');

            rl.question('¿Como se va llamar el archivo?\n\n', function (name){
    
                rl.question('¿Que quieres introducir dentro del archivo?\n\n', function (contenido){
    
                    var fs = require('fs');
    
                        fs.writeFile(name +'.txt', contenido, function (err) {
                        if (err) throw err;
                        console.log('Nota Creada!');
                    });
    
                    rl.close();
                });    
            });
        
    } else if(answer == 2) {
        console.log('Has introducido "Editar nota" existente');
        //Primero leemos todos los archivos que hay en la carpeta
        rl.close();
    } else if (answer == 3) {
        console.log('Has introducido "Eliminar nota"');
        rl.close();
    } else {
        console.log('No has introducido correctamente los datos');
        rl.close();
    }

});
