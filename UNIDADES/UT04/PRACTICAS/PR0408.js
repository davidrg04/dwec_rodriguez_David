let imagenes = document.getElementsByTagName('img');

let arrayImagens = Array.from(imagenes);


document.getElementById('btn').addEventListener('click',()=>{
    let arrEnlaces= arrayImagens.map((enlace) => enlace.getAttribute('src'));
    arrayImagens.forEach((enlace) =>{
        let aleatorio = Math.floor(Math.random()*arrEnlaces.length);
        enlace.setAttribute('src', arrEnlaces[aleatorio]);
        arrEnlaces.splice(aleatorio, 1);
    });

});



