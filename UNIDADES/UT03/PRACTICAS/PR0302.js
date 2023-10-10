 let usuario = {
    nombre: "David",
    nick: "DRG"
 }
 let informacion = {
    edad: 19,
    ciudad: "Benavente"
 }

 let objetoMezclado=mergeObjects(usuario, informacion);

 for (let key in objetoMezclado) {
    console.log(objetoMezclado[key]);
 }


 function mergeObjects(objeto1,objeto2) {
    let objetosMezclados = {};
        for (let key in objeto1) {
            objetosMezclados[key] = objeto1[key] 
        }

        for (let key in objeto2) {
            objetosMezclados[key] = objeto2[key] 
        }

        return objetosMezclados
    }
    

 