let resultado=getFibonacci(6);
alert(resultado);


function getFibonacci(n) {
    

    let fibonacci=(n==0) ? 0:
            (n==1) ? 1: (getFibonacci(n-1)+ getFibonacci(n-2));
            
    return fibonacci;

}