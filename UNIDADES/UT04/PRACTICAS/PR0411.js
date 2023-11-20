let ul = document.querySelector('ul');
let agregar = document.getElementById('add-button');
let tareas = [];
let texto = document.getElementById('input-text');

agregar.addEventListener('click', ()=>{
    if (texto.value != "") {
        tareas.push(texto.value);
        console.log(texto.value);
        generarHtml(tareas);
        texto.value = "";
    }else{
        alert("No puedes añadir campos vacios");
    }
    
    
});

function generarHtml(tareas) {
    ul.innerHTML = "";

    tareas.forEach((tarea) => {
        let li = document.createElement('li')
        
        li.textContent = tarea;
        ul.append(li);
    });
    
}