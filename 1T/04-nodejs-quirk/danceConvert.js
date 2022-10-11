/* Dance for Cash */

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceforcash(pin) {
	if(!pin.match(/\d{4}/)) return 'Invalid input.';
	return [...pin].map((item, index) => {
		let posicion = parseInt(item)+index;
		while (posicion >= 10) posicion -= 10;
		return MOVES[posicion];
	})
}
