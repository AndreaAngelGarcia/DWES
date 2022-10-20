/* Función asíncrona */

async function start(){
    try {
        const response = await fetch("https://swapi.dev/api/people/10");
        const data = await response.json();
        console.log(data.name);
    }catch(error) {
        console.log('Error: ', error.message);
    }
}

start();