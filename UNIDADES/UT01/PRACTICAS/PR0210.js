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
let numero=Number(prompt(`Dime el numero 1`));
let numeroMenor=numero;
let numeroMayor=numero;

for (let i = 2; i <=5; i++) {
    let n1=Number(prompt(`Dime el numero ${i}`));
    if (n1<numeroMenor) {
        numeroMenor=n1;
    }
    if(n1>numeroMayor){
        numeroMayor=n1;
    }
}

alert(`El numero menor es ${numeroMenor} y el mayor es ${numeroMayor}`);

    
