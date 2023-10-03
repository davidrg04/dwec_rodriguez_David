let numero=Number(prompt('Dime un número'));

while (numero<=0 || isNaN(numero) ) {
    numero=Number(prompt('Dime un número valido'));
}

if (numero%2==0) {
    alert(`El número ${numero} es par`);
} else {
    alert(`El número ${numero} es impar`);
}