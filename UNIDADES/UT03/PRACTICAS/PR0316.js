let numeros = [1,3,5];
console.log(createPow(numeros));


function createPow(numeros, pow=4) {
    let nuevoArray=[];
    for (let numero of numeros) {
        nuevoArray.push(Math.pow(numero,pow));
    }
    return nuevoArray
}