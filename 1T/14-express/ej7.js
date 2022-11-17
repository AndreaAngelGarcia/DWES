/*Ruta fizzbuzz con query string de un numero, y devuelve toda la secuencia de números hasta
dicho numero.*/

import express from 'express';

const app = express();
const port = 3000;

function fizzbuzz(n) {
    const resultado = [];
  
    for (let x = 1; n >= x; x++) {
  
      if ( x%3 === 0 && x%5 === 0) {
        resultado.push('fizzbuzz');
      } else if (x%3 === 0) {
        resultado.push('fizz');
      } else if(x%5 === 0) {
        resultado.push('buzz');
      } else {
        resultado.push(x);
      }
  }  
  
    return resultado;
}

app.get('/:n', (req, res) => { 
  const n = req.params.n;
    res.send(`${fizzbuzz(n)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});