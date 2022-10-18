import fetch from 'node-fetch';

const obiWan = fetch("https://swapi.dev/api/people/10");
const darthVader = fetch("https://swapi.dev/api/people/4");
const leia = fetch("https://swapi.dev/api/people/5");


Promise.all([obiWan, darthVader, leia])
    .then(responses => {
        responses.forEach(r => {
            r.json().then(starWars => {
                console.log(starWars.name);
            })
        });
    });


/* Función asíncrona */

async function start(){
    

}

start();

