
let arraDif = arrayDiff([1,2],[1])
console.log(arraDif);

function arrayDiff(arr1,arr2) {
    let arraDif = arr1.filter(item => !arr2.includes(item));
    return arraDif;
}