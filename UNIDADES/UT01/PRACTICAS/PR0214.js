let numero=Number(prompt("Dime un numero para calcular su factorial"));
let numeroFactorial=calcFact(numero);

alert(`El Factorial de ${numero} es ${numeroFactorial}`)


function calcFact(n){
    
    if (n===1) {
        return 1;
    } else {
        return n*calcFact(n-1);
    }
    
    
}