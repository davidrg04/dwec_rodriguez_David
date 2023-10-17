


convertBase("10101",2,8);



function convertBase(str,baseFrom,baseTo){
    
    if (isNaN(Number(str))) {
        console.log("Error, debes escribir un numero");
    }else{
        if (!(baseFrom==10)) {
            let numero=parseInt(str, baseFrom);
            let numeroDecimal=Number(numero.toString(10));
            let numeroFinal=Number(numeroDecimal.toString(baseTo));
            console.log(numeroFinal);
        }else{
            let numero2=parseInt(str,baseFrom);
            console.log(numero2.toString(baseTo));
        }
    }
}