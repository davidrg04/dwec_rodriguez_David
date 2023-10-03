// let numero1=Number(prompt('Dime el primer número'));
// let numero2=Number(prompt('Dime el segundo número'));
// let numero3=Number(prompt('Dime el tercer número'));
// let numero4=Number(prompt('Dime el cuarto número'));
// let numero5=Number(prompt('Dime el quinto número'));

// let mayor=numero1;
// let menor=numero1;

// if (numero2<menor) {
//     menor=numero2;
// }
// if (numero3<menor){
//     menor=numero3;
// }
// if (numero4<menor) {
//     menor=numero4;
// }
// if (numero5<menor) {
//     menor=numero5;
// } 

// if (numero2>mayor) {
//     mayor=numero2;
// }
// if (numero3>mayor){
//     mayor=numero3;
// }
// if (numero4>mayor) {
//     mayor=numero4;
// }
// if (numero5>mayor) {
//     mayor=numero5;
// } 

// alert(`El mayor número es ${mayor} y el menor es ${menor}`);

let numeroMenor=Infinity;
let numeroMayor=-Infinity;

for (let i = 1; i <=5; i++) {
    numero=Number(prompt(`Dime el numero ${i}`));
    if (numero<numeroMenor) {
        numeroMenor=numero;
    }
    if(numero>numeroMayor){
        numeroMayor=numero;
    }
}

alert(`El numero menor es ${numeroMenor} y el mayor es ${numeroMayor}`);

    
