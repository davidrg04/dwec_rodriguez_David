
console.log(ascendDescend(10, 2, 5));


function ascendDescend(len, min, max) {
    let cadena="";
    let contador= 0;

    while (contador < len) {
        for (let i = min; i < max; i++) {
            cadena+=i;
            contador++;
            if (contador >= len) break;   
        }
        for (let i = max; i > min; i--) {
            cadena+=i;
            contador++;
            if (contador >= len) break;
        }
    }

    return cadena;
}