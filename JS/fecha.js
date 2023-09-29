const fecha= new Date();
const diaMes=fecha.getDate();
const mes=(fecha.getMonth()+1).toString().padStart(2,'0');
const anio=fecha.getFullYear();
const fechaObtenida=`${diaMes}/${mes}/${anio}`;
// document.getElementById('fecha').textContent= `${diaMes}/${mes}/${anio}`;
let element=document.getElementById('fecha');
element.innerHTML=fechaObtenida;