/*Ruta fizzbuzz con query string de un numero, y devuelve toda la secuencia de números hasta
dicho numero.*/

const querystring = require("query-string");
const http = require("http");

function fizzBuzz(n) {
  const result = [];
  for (let x = 1; x <= n; x++) {

    if (x % 3 == 0 && x % 5 == 0) {
      result.push("fizzbuzz");
    }else if (x % 3 == 0) {
      result.push("fizz");
    }else if (x % 5 == 0) {
      result.push("buzz");
    }else {
      result.push(x);
    }
  }

  return result;
}


http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/json");
  const n = req.url;

  const q = querystring.parse(`n=${n.split("/").join("")}`);;
  res.writeHead(200);
  res.end(`${fizzBuzz(q.n)}`);
}).listen(4000);