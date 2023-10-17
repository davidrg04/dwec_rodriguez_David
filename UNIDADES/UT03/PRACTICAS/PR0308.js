
let letras = countLetters('Abbccad');
console.log(letras);


function countLetters(cadena){
    let cadena2=cadena.toUpperCase();
    let letras = {}
    for (let letra of cadena2) {
        let contador=0;
        for (let caracter of cadena2) {
            contador+=(letra===caracter) ? 1 : 0;
        }
        letras[letra] = contador;
        
    }
    return letras;
}