



console.log(replaceWithPosition('hola'));




function replaceWithPosition(str) {
    let alfabeto = ' abcdefghijklmnopqrstuvwxyz';
    for (let letra of str) {
        str=str.replace(letra, alfabeto.indexOf(letra.toLowerCase()));
    }
    return str;
}