
let letras = countLetters('Abbccad');
console.log(letras);


function countLetters(cadena){
    let letras = {}
    for (let letra of cadena.toUpperCase()) {
        let contador=0;
        for (let caracter of cadena.toUpperCase()) {
            contador+=(letra===caracter) ? 1 : 0;
        }
        letras[letra] = contador;
        
    }
    return letras;
}