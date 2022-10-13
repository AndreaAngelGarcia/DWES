const obj = {a: 1, b: 2, c: 3};

function keysAndValues(obj) {
	return [Object.keys(obj), Object.values(obj)];	
}

console.log(keysAndValues(obj));
