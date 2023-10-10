

let alumno = {
    nombre: "David",
    curso : "DAW2"
}

let copiaAlumno=cloneObject(alumno);

alert(`El nombre del alumno es ${copiaAlumno['nombre']} y el curso es ${copiaAlumno['curso']}`);

function cloneObject(objeto) {
   let copiaAlumno= {};
   for (let key in objeto){
        copiaAlumno[key]=objeto[key];
   }
   return copiaAlumno;
}