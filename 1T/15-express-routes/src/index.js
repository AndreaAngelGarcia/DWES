import express from 'express';
const app = express();
const port = 3000;
const router = express.Router();

/* /header recoger he imprimir por consola un parámetro llamado token */
app.get(`/header/:token`, (req, res) => {
    const { token } = req.params;
    console.log(token);
});

/*Si no está definido, devolver la respuesta con el código 401 y un objeto*/
app.get(`/header/`, (req, res) => {
    const error = {
        "code": 401,
        "error": "Unauthorized",
        "message": "Error: Set a token to login"
    };
    console.log(error);
});

/* /params crear un parámetro llamado name en la ruta y devolver Hola ${name} */
app.get(`/params/:name`, (req, res) => {
    const { name } = req.params;
    res.send(`Hola ${name}`);
});

/* /query enviar un número n y devolver la suma de todos los números desde el 1 hasta el número
recibido.
- Si el número no se define, se tomará 100 por defecto. */

function SumaN(n) {
    if (n === null) {
        n = 100;
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        return suma;
    } else {
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        return suma;
    }
}

app.get(`/query/:n`, (req, res) => {
    const { n } = req.params;
  
    res.send(`${SumaN(n)}`);
});

app.get(`/query/`, (req, res) => {
    const n = null;

    res.send(`${SumaN(n)}`);
});

/* /body Imprimir todo el objeto entrante en una lista HTML en el que se muestren todos los
parámetros: su clave y su valor. */

const objeto = {1 : 'valor', 2: 'valor', 3:'valor'};
const entradas = Object.entries(objeto);
let list = [];

function listaHTML() {
  for (const key in entradas) {
    list.push(`<li>${entradas[key]}</li>`);
  }
}

listaHTML();

app.get(`/body`, function (req, res) {
  res.send(`Este es nuestro objeto: ${list}`);
});


/* /animals Crear un enrutador bajo dicha ruta establecer los siguientes endpoint: 
- /animals/dog devuelve un objeto { "grow": "guau guau"}
- /animals/cat devuelve un objeto { "grow": "miau"}
- /animals/bird devuelve un objeto { "grow": "pio pio"}
El resto de rutas, han de devolver el código 404 con un objeto en la respuesta:
    {
    "code": 404,
    "error": "Not Found",
    "message": "Error: Path not found"
    }
*/

router.get(`/animals/dog`, (req, res) => {
    res.send({ "grow": "guau guau" });
});

router.get(`/animals/cat`, (req, res) => {
    res.send({ "grow": "miau" });
});

router.get(`/animals/bird`, (req, res) => {
    res.send({ "grow": "pio pio" });
});

router.get(`/*`, (req, res) => {
    res.send({
        "code": 404,
        "error": "Not Found",
        "message": "Error: Path not found"
    });
});

app.use(router);

export default router;


app.listen(port, () => {
    console.log(`Estamos escuchando en: http://localhost:${port}`);
})

