let estadoImagen = 0
let palabraAleatoria = undefined;

let imagenes = ['<img src="../imgs/hangman_00.png"/>','<img src="../imgs/hangman_01.png"/>', '<img src="../imgs/hangman_02.png"/>','<img src="../imgs/hangman_03.png"/>', 
               '<img src="../imgs/hangman_04.png"/>','<img src="../imgs/hangman_05.png"/>', '<img src="../imgs/hangman_06.png"/>',
                '<img src="../imgs/hangman_07.png"/>', '<img src="../imgs/hangman_08.png"/>', '<img src="../imgs/hangman_09.png"/>'];

document.getElementById("keyboard").addEventListener('click',adivinarPalabra);
document.addEventListener('keyup',adivinarPalabra);
document.getElementById("hanged").innerHTML = imagenes[estadoImagen];
// document.addEventListener('keydown', ()=>{

// });

let solucion = undefined;


function imprimirTeclado() {
    'abcdefghijklmnñopqrstuvwxyz'.toUpperCase().split('').forEach( letra =>{
        let span = document.createElement("span");
        span.classList.add('key');
        span.textContent = letra;
        span.dataset.id = letra;
        document.getElementById("keyboard").append(span);
    });
}

function generarPalabra() {
    let indiceBuscar = Math.floor(Math.random()*words.length)
   

    palabraAleatoria = words.find( (_, indice) => indice == indiceBuscar);
    console.log(palabraAleatoria);
    solucion = palabraAleatoria;
    
    palabraAleatoria.split('').forEach( (_, indice) =>{
        let span = document.createElement("span");
        span.classList.add('space');
        span.dataset.index = indice;
        document.getElementById("spaces").append(span);
    });
}


function adivinarPalabra(e) {
    
        if (e.type == 'click') {
            if (e.target.classList.contains("key")) {
            (palabraAleatoria.includes(e.target.dataset.id.toLowerCase())) ? letraAcertada(e) : letraFallada(e);
            }
        }else{
            (palabraAleatoria.includes(e.key.toLowerCase())) ? letraAcertada(e) : letraFallada(e);
        }
    
    
}

function letraAcertada(e) {
    if (e.type == 'click') {
        solucion = solucion.replaceAll(`${e.target.dataset.id.toLowerCase()}`,'');
        e.target.classList.add("succeed");
        palabraAleatoria.split('').forEach( (letra,indice) =>{
            if (e.target.dataset.id.toLowerCase() == letra) {
                document.querySelector(`span[data-index = '${indice}']`).innerHTML = letra.toUpperCase();
            };
        });
        if(solucion == ""){partidaGanada()};
    }else{
        solucion = solucion.replaceAll(`${e.key.toLowerCase()}`,'');
        document.querySelector(`span[data-id = '${e.key.toUpperCase()}']`).classList.add("succeed");

        palabraAleatoria.split('').forEach( (letra,indice) =>{
            if (e.key.toLowerCase() == letra) {
                document.querySelector(`span[data-index = '${indice}']`).innerHTML = letra.toUpperCase();
            };
        });
        if(solucion == ""){partidaGanada()};
    }


    
}

function letraFallada(e) {
    if (e.type == 'click') {
        e.target.classList.add("fail");
        actualizarImagen();
    }else{
        document.querySelector(`span[data-id = '${e.key.toUpperCase()}']`).classList.add("fail");
        actualizarImagen();
    }

    

}

function actualizarImagen() {
    estadoImagen++;
    console.log(estadoImagen);
    (estadoImagen == imagenes.length-1) ? partidaPerdida() : document.getElementById("hanged").innerHTML = imagenes[estadoImagen];
}

function partidaPerdida() {
    document.getElementById("hanged").innerHTML = imagenes[estadoImagen];
    document.getElementById("keyboard").removeEventListener('click',adivinarPalabra);
    document.removeEventListener('keyup',adivinarPalabra);

    document.getElementById("msg").style.backgroundColor = "red";
    document.getElementById("msg").textContent = `Has perdido, era ${palabraAleatoria}`;

}

function partidaGanada() {
    document.getElementById("keyboard").removeEventListener('click',adivinarPalabra);
    document.removeEventListener('keyup',adivinarPalabra);

    document.getElementById("msg").style.backgroundColor = "greenyellow";
    document.getElementById("msg").textContent = "Has Ganado"
}


imprimirTeclado();
generarPalabra();
