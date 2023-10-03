
let numero;
do {
    numero= Number(prompt("Dime un numero y te dire si es primo, para finalizar pulsa 0"));
    
        if (isPrime(numero)) {
            alert(`El numero ${numero} es primo`);
        } else {
            alert(`El numero ${numero} no es primo`);
        }
    
    
} while (numero!==0);







function isPrime(n){
    if (n<=1) {
        return false;
    }

    if (n==2){
        return true;
    }

    if (n%2==0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(n); i+=2) {
        if (n%i===0) {
            return true;
        }
        
    }
}