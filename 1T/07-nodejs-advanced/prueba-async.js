import fetch from 'node-fetch';

const obiWan = fetch("https://swapi.dev/api/people/10");
const darthVader = fetch("https://swapi.dev/api/people/4");
const leia = fetch("https://swapi.dev/api/people/5");


const respuestas = await Promise.all([obiWan, darthVader, leia]);

const array = respuestas.map(async r => {
    const starWars = await r.json();
    return starWars.name;
});

const resultados = await Promise.all(array);

console.log(resultados);