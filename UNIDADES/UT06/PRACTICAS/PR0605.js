let jugadores = [];


let dificultades = [
    {
        id : 1,
        width : 300,    // Math.floor(Math.random()*width)+30
        height : 300
    },
    {
        id : 2,
        width : 250,
        height : 250
    },
    {
        id : 3,
        width : 200,
        height : 200
    },
    {
        id : 4,
        width : 150,
        height : 150
    },
    {
        id : 5,
        width : 100,
        height : 100
    }
]
let score = 0;
let cuadrado = document.createElement("div");
let playing = false;
let secs = 0;
let idInterval = undefined;
document.getElementById("btn-start").addEventListener('click',iniciarJuego);
document.getElementById("diff").addEventListener('click',seleccionDificultad);


function iniciarJuego() {
    document.getElementById("btn-reset").addEventListener('click',terminarJugar);
    document.getElementById("btn-start").removeEventListener('click',iniciarJuego);
    document.getElementById("diff").removeEventListener('click',seleccionDificultad);
    document.getElementById("player-input").setAttribute("disabled","true");
    playing = true;


    iniciarTiempo();

    comenzarPartida();
}


function iniciarTiempo() {
    idInterval = setInterval(updateTime,100);

}

function updateTime() {
    secs+=0.1;
    document.getElementById("time").textContent = secs.toFixed(1);

    if (secs >= 20) {
        clearInterval(idInterval);
        partidaTermianda();
    }
}


function comenzarPartida() {
    
    cuadrado.dataset.idDificultad = document.querySelector(".selected").textContent;
    cuadrado.addEventListener('click',renderCuadrado);
    cuadrado.style.backgroundColor = "red";
    cuadrado.style.position = "absolute";
    cuadrado.style.width = `100px`;
    cuadrado.style.height = `100px`;

    cuadrado.style.left = `100px`;
    cuadrado.style.top = `100px`;

    document.getElementById("game-zone").append(cuadrado);
}


function terminarJugar() {
    score = 0;
    secs = 0;
    document.getElementById("player-input").removeAttribute("disabled");
    document.getElementById("time").textContent = 0.0;
    document.getElementById("btn-start").addEventListener('click',iniciarJuego);
    document.getElementById("diff").addEventListener('click',seleccionDificultad);
    document.getElementById("score").textContent = score;

}

function renderCuadrado() {
   score++;
   document.getElementById("score").textContent = score;

   let dificultad = dificultades.find( ({ id }) => id == cuadrado.dataset.idDificultad);
   console.log(cuadrado.dataset.idDificultad);
   let width = (Math.floor(Math.random()*dificultad.width))+10;
   let height = (Math.floor(Math.random()*dificultad.height))+10;

   let ejeX = Math.floor(Math.random()*(window.innerWidth-350-width));
   let ejeY = Math.floor(Math.random()*(window.innerHeight-height));

   cuadrado.style.width = `${width}px`;
   cuadrado.style.height = `${height}px`;

   cuadrado.style.left = `${ejeX}px`;
   cuadrado.style.top = `${ejeY}px`;

}


function seleccionDificultad(e) {
    document.querySelector(".selected").classList.remove("selected");
    e.target.classList.add("selected");
}

function partidaTermianda() {
    cuadrado.removeEventListener('click',renderCuadrado);
    let nombreJugador = document.getElementById("player-input").value;
    jugadores.push({nombre : (nombreJugador.trim()) ? nombreJugador : "Anonimo", puntos : score});
    document.getElementById("player-input").value = "";
    actualizarRanking();
}

function actualizarRanking() {
    jugadores.sort((a,b) => b.puntos - a.puntos);

    document.querySelector("#ranking-first .ranking-name").textContent = `${jugadores[0].nombre}`;
    document.querySelector("#ranking-first .ranking-score").textContent = `${jugadores[0].puntos}`;

    if (jugadores.length >=2) {
        document.querySelector("#ranking-second .ranking-name").textContent = `${jugadores[1].nombre}`;
        document.querySelector("#ranking-second .ranking-score").textContent = `${jugadores[1].puntos}`;
    }

    if (jugadores.length >=3) {
        document.querySelector("#ranking-third .ranking-name").textContent = `${jugadores[2].nombre}`;
        document.querySelector("#ranking-third .ranking-score").textContent = `${jugadores[2].puntos}`;
    }
    

}