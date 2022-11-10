const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require('fs');

const arg = process.argv;

const files = fs.readdirSync('./');

/* CREAR NOTA */
if (parseInt(arg[2], 10) === 1) {
  console.log('Has elegido "Crear nota"\n');

  rl.question('Introduzca el nombre de la nota:\n\n', name => {
    rl.question('Introduzca el contenido de la nota:\n\n', contenido => {
      fs.writeFile(`${name}.note`, contenido, err => {
        if (err) throw err;
        console.log('Nota Creada!');
      });

      rl.close();
    });
  });

  /* EDITAR NOTA */
} else if (parseInt(arg[2], 10) === 2) {
  console.log('Has elegido "Editar nota", estos son los archivos en la carpeta: ');

  // Primero leemos todos los archivos que hay en la carpeta
  console.log(files);

  // Mostramos lo que hay en el archivo elegido
  rl.question('Introduzca la nota que quiera elegir:\n\n', archivo => {
    const texto = fs.readFileSync(archivo, { encoding: 'utf-8' });

    console.log('\nEl archivo elegido contiene la siguiente informacion: \n');

    console.log(texto);

    console.log('\n');

    // Editamos el archivo elegido
    rl.question('Introduzca el nuevo contenido:\n\n', nuevoContenido => {
      fs.writeFile(archivo, nuevoContenido, err => {
        if (err) throw err;
        console.log('Contenido editado!\n\n');

        console.log('El nuevo contenido es:\n');

        // Leemos el contenido de la nota editada
        const texto1 = fs.readFileSync(archivo, { encoding: 'utf-8' });
        console.log(texto1);

        rl.close();
      });
    });
  });

  /* BORRAR NOTA */
} else if (parseInt(arg[2], 10) === 3) {
  console.log('Has introducido "Eliminar nota", estas son las notas que puede elegir: \n');

  console.log(files);

  rl.question('Introduzca la nota que quieras borrar: ', borrar => {
    fs.unlink(borrar, err => {
      if (err) throw err;
      console.log('Archivo borrado!');

      rl.close();
    });
  });
} else {
  console.log('No has introducido correctamente los datos, introduce un número del 1 al 3.');
  rl.close();
}
