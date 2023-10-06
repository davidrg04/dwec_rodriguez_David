
let numero=prompt('Dime un número y te dire si es válido');
let validNumber=isNumber(numero);

alert(validNumber);


function isNumber(str){

    let resultado=(isNaN(Number(str)) || str===null || str=='') ? false : true;
    return resultado;
}