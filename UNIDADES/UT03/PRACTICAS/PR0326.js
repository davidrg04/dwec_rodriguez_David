let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
];

let inseguras = getUnsecurePass();
console.log(inseguras);




function getUnsecurePass() {
    let inseguras = [];
    let segura;
    arr.forEach((estudiante)=>{
        let alumno={};
        
        segura = ('abcdefghijklmnñopqrstuvwxyz'.includes(estudiante.pass) 
          && 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.includes(estudiante.pass) 
          && '0123456789'.includes(estudiante.pass) 
          && estudiante.pass.length >= 8);


        if(!segura){
            alumno.nombre = `${estudiante.nombre} ${estudiante.ape1} ${estudiante.ape2}`;
            inseguras.push(alumno);
        }
    });
    return inseguras;
}


// function isUnsecurePass (pass){
//     let a = pass.split('');
//     let secure =true;
//     a.forEach(char => {
        
//     });



//     return false;
// }

// function getUnsecurePass(arr) {
//     return arr.filter(({pass})=> isUnsecurePass(pass));
    
// }


// function getUnsecurePass() {
//     let inseguras = [];
//        arr.forEach((estudiante) =>{
//             let alumno = {};
//             let contraseña = estudiante.pass.split();
            
//             let ordenado=contraseña.some((letra =>{
//                 return (!letra.includes('abcdefghijklmnñopqrstuvxyz')) ? false : (!letra.includes('ABCDEFGHIJKLMNÑOPQRSTUVXYZ')) ? false : (contraseña.length()<8) ? false : true;
//             }));

//             if(!ordenado) {
//                 alumno.nombre = `${estudiante.nombre} ${estudiante.ape1} ${estudiante.ape2}`;
//                 inseguras.push(alumno);
//             }
//        });

//        return inseguras;
// };