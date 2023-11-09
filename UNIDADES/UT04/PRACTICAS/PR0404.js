let parrafosDom = document.getElementsByTagName('p');
let span = document.getElementById('parrafos');
span.textContent = parrafosDom.length;




let enlaces = document.getElementsByTagName('a');
let penultimoEnlace = enlaces[enlaces.length-2];


document.getElementById('penultimo-enlace').textContent = penultimoEnlace.getAttribute('href');

let contadorEnlaces = 0;
for (let enlace of enlaces) {
    contadorEnlaces = (enlace.getAttribute('href') === 'https://www.google.es') ? contadorEnlaces+1 : contadorEnlaces;
}

document.getElementById('links-google-es').textContent = contadorEnlaces;


let parrafos = document.getElementsByTagName('p');
let segundoParrafo = parrafos[1];
let contenidoParrafo = segundoParrafo.textContent;
console.log(contenidoParrafo);
let arrayContenido=contenidoParrafo.trim().split(" ");
console.log(arrayContenido);

document.getElementById("palabras-segundo-parrafo").textContent = arrayContenido.length;
