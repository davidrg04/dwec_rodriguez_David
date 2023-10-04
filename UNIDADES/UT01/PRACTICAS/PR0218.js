


let solucion=calcDesigualdadTriangular(20,4,5);
alert(`El resultado es ${solucion}`);






function calcDesigualdadTriangular(n1,n2,n3){
    let resultado=(n1+n2>n3 && n2+n3>n1 && n3+n1>n2) ? true : false;
    return resultado;
}