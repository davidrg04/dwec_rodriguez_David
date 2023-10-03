document.addEventListener("DOMContentLoaded", function(){
    const fecha= new Date();
    const diaMes=(fecha.getDate().toString().padStart(2,'0'));
    const mes=(fecha.getMonth()+1).toString().padStart(2,'0');
    const anio=fecha.getFullYear();
    const fechaObtenida=`${diaMes}/${mes}/${anio}`;
// document.getElementById('fecha').textContent= `${diaMes}/${mes}/${anio}`;
    const parrafo=document.getElementById("fecha");
    parrafo.textContent+=fechaObtenida;
});



