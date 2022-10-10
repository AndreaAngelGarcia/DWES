/*Cree una funcion que tome una matriz de numeros y regrese "Boom!"si el digito 7 aparece en la matriz. 
De lo contrario, regresa "there is no 7 in the array".*/

function SevenBoom(){
    let array = [1,2,3,4,5,6,10].toString();
    let resultado = "No hay ningun 7 aqui!";

    for(let i = 0; i < array.length; i++){  //Recorremos el array
        for(let j = 0; j < array[i].length; j++){  //Recorremos los numeros por si hay mas de un digito
            if (array[i][j] == 7){
              resultado = "Boom!!"; 
            }
        }
    }
    return resultado;
}


console.log(SevenBoom());
