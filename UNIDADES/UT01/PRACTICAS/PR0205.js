
let numeroUsuario=(prompt('Dime un numero valido'));

while ((numeroUsuario === null) || (numeroUsuario.trim()=='') || (isNaN(Number(n)))) {
    numeroUsuario=(prompt('NO ES VALIDO INDIQUE OTRO'));
}
alert(`El ${numero} es valido`);
