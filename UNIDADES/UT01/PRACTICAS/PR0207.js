let numero=Number(prompt('Dime un numero para la base del triángulo'));

for (let i = 0; i <= numero; i++) {
    let linea= '';
    for (let j = 0; j < i; j++) {
        linea+='*';
    }
    console.log(linea);
    
}