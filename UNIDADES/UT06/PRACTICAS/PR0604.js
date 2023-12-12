
let contador = 0;
let cuadrado = document.getElementById("cuadrado");





function posicionarCuadrado() {
    let width = (Math.floor(Math.random()*180))+15;
    let height = (Math.floor(Math.random()*100))+15;

    let ejeX = Math.floor(Math.random()*(window.innerWidth-width));
    let ejeY = Math.floor(Math.random()*(window.innerHeight-80-height));

   
    crearCuadrado(ejeX,ejeY,width,height);
}


function crearCuadrado(ejeX,ejeY,width,height) {
    
    cuadrado.style.width = `${width}px`;
    cuadrado.style.height = `${height}px`;

    cuadrado.style.left = `${ejeX}px`;
    cuadrado.style.top = `${ejeY}px`;


    
}

cuadrado.addEventListener('click',()=>{
    contador++;
    posicionarCuadrado();
    document.querySelector("#header div").textContent = contador;
});


window.addEventListener('resize', () => {
    posicionarCuadrado();
});

posicionarCuadrado();



