let arr = ['aBc', 'BE', 'hfa', 'AEO'];

let arrayMayus= getUpperCase(arr);

function getUpperCase(arr) {
   let arrMayus = arr.filter(item => item == item.toUpperCase());
   return arrMayus;
}

console.log(arrayMayus);