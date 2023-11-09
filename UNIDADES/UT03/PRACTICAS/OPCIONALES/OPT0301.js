




console.log(isHeterograma("Victor"));






function isHeterograma(cadena) {
    let arrayCadena = cadena.split();

    let contiene = arrayCadena.some((item) => item == item);

    return contiene;
}