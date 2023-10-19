

let numeroFinal;
console.log(numeroFinal=convertBase("14",10,16));




function convertBase(str,baseFrom,baseTo){
    return (isNaN(Number(str))) ? NaN : parseInt(str,baseFrom).toString(baseTo);
}


