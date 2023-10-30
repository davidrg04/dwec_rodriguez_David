


console.log(max([1,2,3,4,5]));



function max(arr) {
  return arr.reduce((maximo,item) =>{
        if (maximo<item) {
            maximo=item;
        }
        return maximo;
    }, -Infinity);

   
}