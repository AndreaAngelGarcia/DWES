function descomposeURL(descompose){
    const url = new URL(descompose);

    const objeto = {Protocolo: url.protocol, Hostname: url.hostname, Pathname: url.pathname,
        TargetFile: url.search, Hash: url.hash};

    console.log(objeto);
}

descomposeURL("https://www.google.com/search/test.js?ok=1#bar");