
function PiedraPapelTijera (seleccionUsuarioStr = 1){

	console.log("---------------------------");//INTRO PROGRAMA
	console.log("*JUEGO PIEDRA PAPEL TIJERA*");
	console.log("---------------------------");
	
	let seleccionOrdenador = Math.floor(Math.random()*3)+1;
	const seleccionUsuario = parseInt(seleccionUsuarioStr);

    console.log("Indique su seleccion [1 = Piedra, 2 = Papel, 3 = Tijera]: ");
		
    console.log("Ha elegido "+ seleccionUsuario);

	console.log("El ordenador acaba de elegir...");

        switch (seleccionOrdenador){
			case 1:
				console.log("Piedra");
				switch (seleccionUsuario){
					case 1: console.log("Empate!"); 
					break;
					case 2: console.log("Ha ganado!"); 
					break;
					case 3: console.log("El ordenador gana!");
					break;
				}
				break;

			case 2:
				console.log("Papel");
				switch (seleccionUsuario){
					case 1: console.log("El ordenador gana!");
					break;
					case 2: console.log("Empate!"); 
					break;
					case 3: console.log("Ha ganado!");
					break;
				}
				break;

			case 3:
				console.log("Tijera");
				switch (seleccionUsuario){
					case 1: console.log("Ha ganado!");
					break;
					case 2: console.log("El ordenador gana!"); 
					break;
					case 3: console.log("Empate!"); 
					break;
				}
				break;
	}
}

PiedraPapelTijera(process.argv[2]);