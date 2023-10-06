
let numero=Number(prompt("Dime un numero"));
imprimirPrimos(numero);





function imprimirPrimos(n){
    let contador=0;
    
        for (let i = 0; i <= Infinity; i++) {
            if (isPrime(i)) {
                console.log(i);
                contador++;
            }
            if (contador===n) {
                break;
            }   
        }   
    
    
}
function isPrime(n){
    if (n<=1) {
        return false;
    }

    if (n==2){
        return true;
    }

    if (n%2==0 || n%3==0) {
        return false;
    }

    for (let i = 5; i <= Math.sqrt(n); i+=2) {
        if (n%i===0) {
            return false;
        }
        
    }
    return true;
}