

let cadena=removeVowels('Hola Mundo');
console.log(cadena);




function removeVowels(cadena) {
    for (let letra of cadena) {
        if (letra.toUpperCase()=='A'| letra.toUpperCase()=='E' | letra.toUpperCase()=='I' | letra.toUpperCase()=='O' | letra.toUpperCase()=='U') {
            cadena=cadena.replace(letra, ' ');
        }
    }
    return cadena;
}