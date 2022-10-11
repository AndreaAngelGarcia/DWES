function OddvsEve(numero){
    const n = numero.toString();
    let suma = 0;

    for(let i = 0; i < n.length; i++){
        suma += parseInt(n[i]);
    }

    if(suma % 2 === 1){
        console.log("Oddish");//numero impar
    }else{
        console.log("Evenish");//numero par
    }
}

OddvsEve(23);

