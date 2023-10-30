let numeros = [1,3,5];
console.log(createPow(numeros, 4));


function createPow(numeros, pow) {
    let nuevoArray=[];
    for (let numero of numeros) {
        nuevoArray.push(Math.pow(numero,pow));
    }
    return nuevoArray;
}


function createPow(arr,pow) {
    return arr.map(num => Math.pow(num, pow));
}