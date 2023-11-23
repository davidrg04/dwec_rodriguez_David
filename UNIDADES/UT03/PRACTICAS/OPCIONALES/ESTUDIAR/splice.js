let array = [1, 2, 3, 4, 5];

// Eliminar elementos desde el índice 2 hasta el índice 3
array.splice(2, 2);

console.log(array); // Resultado: [1, 2, 5]

let array2 = [1, 2, 3, 4, 5];

// Reemplazar elementos desde el índice 2
array2.splice(2, 2, 6, 7);


// Claro, la función splice() tiene varios parámetros que determinan su comportamiento:

// El primer parámetro es el índice en el que se va a comenzar a hacer cambios en el array.
// El segundo parámetro es la cantidad de elementos que se eliminarán a partir de ese índice.
// A partir del tercer parámetro en adelante, se pueden agregar nuevos elementos al array en la posición indicada.

console.log(array2); // Resultado: [1, 2, 6, 7, 5]

let array3 = [1, 2, 4, 5];

// Insertar elementos en el índice 2
array3.splice(2, 0, 3);

console.log(array3); // Resultado: [1, 2, 3, 4, 5]

let array4 = [1, 2, 3, 4, 5];

// Borrar todos los elementos del array
array4.splice(0, array4.length);

console.log(array4); // Resultado: []
