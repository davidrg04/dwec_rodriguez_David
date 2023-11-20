let arrObjetos = getNames(['Victor González Rodríguez', 'Pepe Pérez Fernández']);
console.log(arrObjetos);


function getNames(arr) {
    let objetos = arr.map(item =>{
        let objeto = {};
        let arrNombre = item.split(" ");
        objeto.nombre = arrNombre[0]
        objeto.apellidos = `${arrNombre[1]} ${arrNombre[2]}`;

        return objeto;
    });
    return objetos;
}