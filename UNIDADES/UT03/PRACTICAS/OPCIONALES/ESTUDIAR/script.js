let personas = [
    { id: 1, nombre: 'Juan', edad: 25, curso: 'Matemáticas' },
    { id: 2, nombre: 'María', edad: 30, curso: 'Historia' },
    { id: 3, nombre: 'Carlos', edad: 22, curso: 'Ciencias' },
    { id: 4, nombre: 'Ana', edad: 28, curso: 'Literatura' },
    { id: 5, nombre: 'Luis', edad: 24, curso: 'Arte' }
  ];
  
  let filter ="";


  function mostrarAlumnos() {
    let listaAlumnos = document.getElementById("listadoAlumnos");
    listaAlumnos.innerHTML = "";
    personas
            .filter(({curso})=> curso.toLowerCase().includes(filter))
            .forEach(({nombre,id})=>{
                listaAlumnos.innerHTML += `
                
                <div class = "alumno">
                    <div>${nombre}</div>
                    <div id="${id}">FICHA</div>
                </div>
                
                
                `;
            })

            cargarBotones();
  }


  function filtrarAlumnos() {
    filter = document.querySelector("#buscar input")
             .value
             .trim()
             .toLowerCase();
             
             mostrarAlumnos();
             document.querySelector("#buscar input").value = "";
  }



  function cargarBotones() {
    let ficha = document.querySelectorAll(".alumno div:last-child");
    

    ficha.forEach(botonFicha=>{
        botonFicha.addEventListener('click', boton =>{
            mostrarFicha(boton.currentTarget.getAttribute("id"));
        });
    })
  }


  function mostrarFicha(idAlumno) {
    let alumno = personas.find(({id})=> id == idAlumno);

    document.getElementById("nombreAlumno").textContent = alumno.nombre;
    document.getElementById("edadAlumno").textContent = alumno.edad;
    document.getElementById("cursoAlumno").textContent = alumno.curso;
 

}

function aniadirAlumno() {
    personas.push({id : personas[personas.length-1].id+1,
                  nombre : document.getElementById("nuevoNombre").value,
                  edad : document.getElementById("nuevaEdad").value,
                  curso : document.getElementById("nuevoCurso").value
                });
            
                document.getElementById("nuevoNombre").value = "";
                document.getElementById("nuevaEdad").value ="";
                document.getElementById("nuevoCurso").value = "";

        mostrarAlumnos();
    
}

function borrarAlumno() {
    //personas = personas.filter(persona => persona.nombre !== nombreAEliminar); DEVOLVE UN ARRAY DISTINTO

    let indice = personas.findIndex(persona => persona.nombre == document.querySelector("#borrar input"));

    (indice != 1) ? personas.splice(indice,1) : alert("No se encuentra el alumno");

    document.querySelector("#borrar input").value = "";
    mostrarAlumnos();

}

document.getElementById("botonBuscar").addEventListener('click', filtrarAlumnos);
document.getElementById("botonAñadir").addEventListener('click', aniadirAlumno);
document.getElementById("botonBorrar").addEventListener('click', borrarAlumno);

  mostrarAlumnos();
  