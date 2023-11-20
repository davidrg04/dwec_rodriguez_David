let numero = digitalRoot(132189);
console.log(numero);

function digitalRoot(numero) {
    let numeroString = numero.toString();

    if (numeroString.length == 1) {
        return Number(numeroString);
    }

    let suma =0;

    for (let number of numeroString) {
        suma+=Number(number);
    }

    return digitalRoot(suma);

}