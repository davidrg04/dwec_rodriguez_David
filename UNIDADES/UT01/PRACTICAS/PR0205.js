let numero=4;
let numeroUsuario=Number(prompt('Adivina el numero del 0-10'));

while (numeroUsuario!=4) {
    numeroUsuario=Number(prompt('NO, ESE NO ES EL NUMERO, INDIQUE OTRO'));
}
alert(`Felicidades el número era ${numero}`);
