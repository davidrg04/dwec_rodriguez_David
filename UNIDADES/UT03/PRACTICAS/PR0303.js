let usuario1 = {
    edad: 19,
    estudia : false,
    trabaja: true,
    nombre: "David"
}
let usuario2 = {
    nombre: "Pablo",
    ciudad: "Benavente",
    apellido: "Rodriguez",
    pais: "España",
    edad: "50"
}

let usuario3=intersectObjects(usuario1,usuario2);
for (let key in usuario3) {
    console.log(usuario3[key]);
}


function intersectObjects(usuario1, usuario2) {
    let usuario = {};

    for (let key in usuario1) {
        for (let key2 in usuario2) {
            if (key2===key) {
                usuario[key]= usuario1[key];
            }
        }
    }


    return usuario;
}