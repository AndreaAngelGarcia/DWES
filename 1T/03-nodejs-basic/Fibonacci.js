
function Fibonacci() {
    let n = 10;
    let num1 = 0;
    let num2 = 1;
    let suma = 1;

        // Mostramos el valor inicial que es 0
        console.log(num1);

        for (let i = 1; i < n; i++) {
            // Mostramos la suma
            console.log(suma);
            //Sumamos
            suma = num1 + num2;
            //Cambiamos la segunda variable por la primera
            num1 = num2;
            //Cambiamos la suma por la segunda variable
            num2 = suma;
        }
}
 
Fibonacci();