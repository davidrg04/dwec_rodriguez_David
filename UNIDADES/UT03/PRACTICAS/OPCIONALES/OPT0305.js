
let cadena = maxString(['hola', 'villabalter', 'adios']);
console.log(cadena);
function maxString(arr) {
    let cadena = arr.reduce((cadenaLarga, item)=>{
        return (item.length > cadenaLarga.length) ? item : cadenaLarga;
    }, "");

    return cadena;
}