let start = document.getElementById('start');
let parar = document.getElementById('stop');
let reset = document.getElementById('reset');

let tiempo = document.getElementById('tiempo');


let milisegundos =0
let segundos = 0;
let minutos = 0;
let id;
let mili =0;
start.addEventListener('click', () =>{
    if (!id) {
        id = setInterval(()=>{
            updateTime();             
         },45);
    }
    
});

parar.addEventListener('click', ()=>{
    if (id) { 
        clearInterval(id); 
        id = undefined;
    }
});

reset.addEventListener('click', ()=>{
    milisegundos =0;
    segundos = 0;
    minutos = 0;
    mili = 0;
    aniadirtiempo();
    if (id !== undefined) {
        clearInterval(id);
        id = undefined;
    }
});


function updateTime() {
    milisegundos+=45;
    mili=(milisegundos%1000).toFixed(0);
    segundos =((milisegundos/1000)%60).toFixed(0);
    minutos =  Math.trunc((milisegundos/60000)).toFixed(0);
    aniadirtiempo();
}

function aniadirtiempo(){
    let cronometro = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2,'0')}.${String(mili).padStart(3, '0')}`;
    tiempo.textContent = cronometro;
}