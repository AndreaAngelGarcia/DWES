/* Funcion que reciba un objeto { bien: N, mal, M } y devuelva el resultado de la resta */

const objeto = { upvotes: 15, downvotes: 5};

function getVoteCount(objeto) {
	return objeto.upvotes - objeto.downvotes;
}

console.log(getVoteCount(objeto));