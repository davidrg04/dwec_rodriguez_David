let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,5];

let esIgual= (arr1,arr2) =>{
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        return arr1.every((item, index) => {
            return item === arr2[index];
        });
    }
}

console.log(esIgual(arr1, arr2));