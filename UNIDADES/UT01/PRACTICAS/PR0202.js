let nombre = prompt('Indica tu nombre');
let n1 = Number(prompt('Indica la nota del primer examen'));
let n2 = Number(prompt('Indica la nota del segundo examen'));
let mensaje = `Hola ${nombre}, la nota media de tus asignatura es ${(n1+n2)/2}`;
alert(mensaje);