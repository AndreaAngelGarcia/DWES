const o = { 1: "a", 2: "b", 3: "c" };

function invert(o) {
    let array = Object.entries(o);
    const invert = array.map(([key, value]) => [value,key]);
    return Object.fromEntries(invert);
}

console.log(invert(o));