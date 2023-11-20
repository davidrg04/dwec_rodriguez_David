

let boton = document.getElementById('btn');
let div = document.getElementsByClassName('images')[0];


// boton.addEventListener('click', () => {
//     let imagenesArray = Array.from(imagenes);
//     let ultimoSrc = imagenesArray[imagenesArray.length-1].getAttribute("src");
//     for (let indice = imagenesArray.length - 1; indice > 0; indice--) {
//         let nuevoSrc = imagenesArray[indice-1].getAttribute("src");
//         imagenesArray[indice].setAttribute("src", nuevoSrc);
//     }
//     imagenesArray[0].setAttribute("src", ultimoSrc);
// });

boton.addEventListener('click', () =>{
    let imagen = document.querySelector('img:last-of-type');
    div.prepend(imagen);
});