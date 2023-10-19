

let cadena=removeVowels('Hola Mundo');
console.log(cadena);




function removeVowels(cadena) {
   
    for (let letra of cadena.toUpperCase()) {
             cadena=cadena.replace(letra, (letra in 'AEIOU') ? '' : letra);
    }
    return cadena;
}

// function removeVowels(cadena) {
//     let letras = "AEIOU";
//     for (let letra of cadena) {
//         for (let letra2 of letras) {
//             if (letra.toUpperCase()==letra2) {
//                 cadena=cadena.replace(letra, "");
//             }
//         }
//     }
//     return cadena;
// }