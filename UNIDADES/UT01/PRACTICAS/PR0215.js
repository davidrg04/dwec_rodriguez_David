


let numero=calc(2,2,'%');

alert(`El resultado es ${numero}`)


function calc(operador, operando1, signo){
    let resultado=0;
    switch (signo) {
        case '/':
            resultado=operador/operando1;
            return resultado;
        case '+':
            resultado=operador+operando1;
            return resultado;
        case '-':
            resultado=operador-operando1;
            return resultado;
        case '*':
            resultado=operador*operando1;
            return resultado;
        case '^':
            resultado=Math.pow(operador,operando1);
            return resultado;
        case '%':
            resultado=(operador*operando1)/100;
            return resultado;
        default:
            alert('El signo introducido no es valido')
            break;
    }

}