let solucion=sumOfMults(3,5);
alert(solucion);




function sumOfMults(k,n){
    let resultado=0;
    for (let i = 1; i <= n; i++) {
        resultado=resultado+(k*i);
    }
    return resultado;


}