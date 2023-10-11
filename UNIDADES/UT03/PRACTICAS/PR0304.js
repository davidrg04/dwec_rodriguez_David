// let usuario1 = {
//     nombre: "David",
//     nick: "DRG"
//  }
//  let usuario2 = {
//     nombre: "Juan",
//     nick: "uop"
//  }

// let resultado=containsObject(usuario1,usuario2);
// alert(resultado);

//  function containsObject(usuario1, usuario2) {
//     let esta=false
//     let array1=[];
//     let array2=[];

//     for (let key in usuario1) {
//         array1.push(key);
//     }
//     for (let key2 in usuario2) {
//         array2.push(key2);
//     }
    

//     if (!(array1.length === array2.length)) {
//         return false;
//     }else{
//         for (let i = 0; i < array1.length; i++) {
//             for (let j = 0; j < array2.length; j++) {
//                 if (array1[i]===array2[j]) {
//                     esta=true;
//                     break;
//                 }else{
//                     esta=false;
//                 }
                
//             }
//             if (esta==false) {
//                 break;
//             }
            
//         }
//     }

//     return (esta==true) ? true : false;
//  }

let usuario1 = {
    nombre : "David",
    nick : "drg"
}
let usuario2 = {
    nombre : "David",
    nick : "drg",
    ciudad : "benavente"
}

function containsObject(usuario1,usuario2) {
    
    for (let key in usuario1) {
        if (!(key in usuario2)) {
            return false;
        }
    }

    return true;
}


