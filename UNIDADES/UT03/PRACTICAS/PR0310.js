



console.log(replaceWithPosition('hola'));




function replaceWithPosition(str) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let cadena = str;
    for (let letra of str) {
        cadena=cadena.replace(letra, alfabeto.indexOf(letra.toLowerCase())+1);
    }

    return cadena;
}