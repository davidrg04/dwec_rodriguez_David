
let cadena = reverseWords('Hola mundo');
console.log(cadena);

function reverseWords(str) {
    let cadena = str.split(' ');
    cadena.forEach((palabra, index, arr) => {
        arr[index] = palabra.split('').reverse().join('');
    });
    return cadena.join(' ');
};