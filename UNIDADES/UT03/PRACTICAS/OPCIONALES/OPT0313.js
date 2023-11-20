



function cakes(ingredientes, lista) {
    let recetasTotales = 0;
    for (let ingrediente in ingredientes) {
        if (lista.hasOwnProperty(ingrediente)){
            lista[ingrediente]-ingredientes[ingrediente];

            if(lista[ingrediente]<0){
                return recetasTotales;
            }
        }else{
            return recetasTotales;
        }

    }
    return recetasTotales;
}