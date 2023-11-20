


// document.getElementById('btn').addEventListener('click',()=>{
//     let arrEnlaces= arrayImagens.map((enlace) => enlace.getAttribute('src'));
//     arrayImagens.forEach((enlace) =>{
//         let aleatorio = Math.floor(Math.random()*arrEnlaces.length);
//         enlace.setAttribute('src', arrEnlaces[aleatorio]);
//         arrEnlaces.splice(aleatorio, 1);
//     });

// });
let imagenes = document.getElementsByTagName('img');
let div = document.getElementsByClassName('images')[0]
document.getElementById('btn').addEventListener('click', () =>{
    let arrImagen = Array.from(imagenes);
    arrImagen.sort(() => Math.random() - 0.5);
    
    arrImagen.forEach(img => {
        div.append(img);
    });
});

