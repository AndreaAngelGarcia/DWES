/* Eliminar todos los elementos inferiores a 18 de un array de números */

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const resultado = numeros.filter(numerosMenor);

  function numerosMenor(numeros){
    return numeros >= 18;
  }

console.log(resultado);