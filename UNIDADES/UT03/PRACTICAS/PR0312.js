let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,6];

let isEqualarr=(arr1,arr2) => (arr1.length !== arr2.length) ? false : arr1.every( (item, index) => item === arr2[index] );


console.log(isEqualarr(arr1, arr2));

// function aa (b, c) {
//     //Código
//     return true;
// }

// let aaa = (b, c) => b + c;
