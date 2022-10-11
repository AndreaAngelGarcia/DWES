/* Función que reciba las dimensiones de un cubo en un objeto y devuelva el volumen { ancho:
2, largo: 5, alto: 1 }*/

const sizes = { width: 2, length: 5, height: 1 };

function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}

console.log(volumeOfBox(sizes));