/**
    * Programa que imprima los numeros desde el 1 hasta el N
    * Cada vez que encuentre un multiplo de 3 escribirá 'fizz'
    * Cada vez que encuentre un multiplo de 5 escribirá 'buzz'
    * Si es multiplo ambos escribirá 'fizzbuzz'
*/

function fizzbuzz(n = 1){
    //Programa que imprima los numeros desde el 1 hasta el N
    for(let i = 1; n >= i; i++){
        //Si es multiplo ambos escribirá 'fizzbuzz'
        if(i % 3 === 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        }
        //Cada vez que encuentre un multiplo de 3 escribirá 'fizz'
        else if(i % 3 === 0 ) {
        console.log("Fizz");
        }
        //Cada vez que encuentre un multiplo de 5 escribirá 'buzz'
        else if(i % 5 === 0 ) {
        console.log("Buzz");
        }
        else {        
            console.log(i);
        }     
    }
}

fizzbuzz(20);
