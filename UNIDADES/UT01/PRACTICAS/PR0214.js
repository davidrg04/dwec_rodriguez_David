let numero=Number(prompt("Dime un numero para calcular su factorial"));
let numeroFactorial=calcFact(numero);

alert(`El Factorial de ${numero} es ${numeroFactorial}`)


function calcFact(n){
    let factorial=1;
    if (n===1) {
        return factorial;
    } else {
        for (let i = 2; i <= n; i++) {
            factorial*=i;
        }
    }
    
    return factorial;
}