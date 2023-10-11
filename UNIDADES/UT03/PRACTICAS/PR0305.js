let usuario1 = {
    nombre : "david",
    edad : undefined
}


let usuario2=removeUndefined(usuario1);
for (let key in usuario2) {
    console.log(usuario2[key]);
}


function removeUndefined(usuario) {
    let usuario2= {}


    for (let key in usuario) {
        if (!(usuario[key]===undefined)) {
            usuario2[key]= usuario[key];
        }
    }
        
        return usuario2;
    }



    

