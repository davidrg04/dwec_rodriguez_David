let ul = document.querySelector('ul');
let agregar = document.getElementById('add-button');
let tareas = [];
let texto = document.getElementById('input-text');
let borrar;
agregar.addEventListener('click', ()=>{
    if (texto.value != "") {
        let id = generarId();
        let tarea ={
            idObjeto : id,
            contenido : texto.value
        };
        tareas.push(tarea);
        generarHtml(tareas);
        texto.value = "";
    }else{
        alert("No puedes añadir campos vacios");
    }
    
    
});


function cargarBotones() {
    borrar = document.querySelectorAll("span.btn");
    borrar.forEach(botonBorrar =>{
        botonBorrar.addEventListener('click', (boton)=>{

        let id  = boton.currentTarget.getAttribute("data-id-propia");
        tareas = tareas.filter(tarea => tarea.idObjeto !== id);
        console.log(tareas);
        generarHtml(tareas);
    });
});
}



function generarHtml(tareas) {
    ul.innerHTML = "";

    tareas.forEach((tarea) => {
        let li = document.createElement('li');

        li.setAttribute("id", tarea.idObjeto);
        li.classList.add("todo");
        let boton = document.createElement('span');
        boton.classList.add("btn");
        boton.dataset.idPropia = tarea.idObjeto;

        boton.textContent = "Borrar";
        li.textContent = tarea.contenido;
        li.append(boton);
        ul.append(li);
    });
    cargarBotones();
    
}



function generarId(){
    return Math.floor((Math.random() * (36**4))).toString(36).padStart(4, '0');
  
}