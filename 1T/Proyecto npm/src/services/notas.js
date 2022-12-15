/* TODOS LOS FS AQUI */
const fs = require('fs');

function crearNota(name, data) {
  fs.writeFileSync(`${name}.note`, data);
}

module.exports = {
  crearNota,
};

/*
function crearNota(name, data) {
  fs.writeFile(`${name}.note`, data, err => {
    if (err) throw err;
    console.log('Nota Creada!');
  });

  rl.close();
} */
