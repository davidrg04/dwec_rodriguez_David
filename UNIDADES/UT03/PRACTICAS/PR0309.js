

let cadena=removeVowels('Hola Mundo');
console.log(cadena);




function removeVowels(cadena) {
    
    for (let letra of cadena) {
             cadena=cadena.replace(letra, ('AEIOU'.includes(letra.toUpperCase())) ? "" : letra);
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