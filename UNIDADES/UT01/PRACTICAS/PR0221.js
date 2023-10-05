
let numero=prompt('Dime un numero y te dire si es valido');
let validNumber=isNumber(numero);

alert(validNumber);


function isNumber(str){

    let resultado=(isNaN(Number(str)) || str===null || str=='') ? false : true;
    return resultado;
}