let resultado=getFibonacci(23);
alert(resultado);


function getFibonacci(n) {
    

    let fibonacci=(n==0) ? 0:
            (n==1) ? 1: ((n-1)+(n-2));
            
    return fibonacci;

}