const students = ([{ "name": "Andrea", "notes": [3, 5, 4] },
    { "name": "Manuel", "notes": [1, 4, 6] },
    { "name": "Richi", "notes": [0, 2, 3] }]);

function getStudentsWithNamesAndTopNotes(students) {
	return students.map(({ name, notes }) => ( //Recorremos con .map, cambiamos notes por topNote y sacamos la nota mas alta con Math.max
		{ name, topNote: Math.max(0, ...notes) }));
}

console.log(getStudentsWithNamesAndTopNotes(students));