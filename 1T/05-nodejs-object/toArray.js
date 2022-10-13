const obj = { foo: 'bar', baz: 42 };

function toArray(obj) {
    return Object.entries(obj);
}

console.log(toArray(obj));