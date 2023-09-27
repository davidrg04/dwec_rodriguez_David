let precioManzanas = Number(prompt('Precio por kilo de manzanas'));
let numeroManzanas = Number(prompt('¿Cuantas kilos de manzanas son?'));
let precioNaranjas = Number(prompt('Precio por kilo de Naranjas'));
let numeroNaranjas = Number(prompt('¿Cuantas kilos de naranjas son?'));
let precioPlatanos = Number(prompt('Precio por kilo de platanos'));
let numeroPlatanos = Number(prompt('¿Cuantos kilos de platanos son?'));


let mensaje = `Has comprado un total de ${numeroManzanas+numeroManzanas+numeroPlatanos} kilos de fruta y te ha costado ${(numeroManzanas*precioManzanas)+(numeroNaranjas*precioNaranjas)+(numeroPlatanos*precioPlatanos)}`;
alert(mensaje);