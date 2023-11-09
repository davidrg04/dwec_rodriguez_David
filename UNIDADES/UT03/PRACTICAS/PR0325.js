let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
];

let mediaAlumnos=getAverages();
console.log(mediaAlumnos);

function getAverages() {
    let mediaAlumnos = [];
    arr.forEach((estudiante) =>{
        let contador = 0;
        let notas = 0;
        let alumno = {};
        alumno.nombre = `${estudiante.nombre} ${estudiante.ape1} ${estudiante.ape2}`;
        alumno.expediente = `${estudiante.expediente}`;
        
        for (let modulo in estudiante.notas) {
            contador++
            notas+=estudiante.notas[modulo];

        }
        alumno.nota_media=(notas/contador).toFixed(1);
        mediaAlumnos.push(alumno);
    });
    return mediaAlumnos;
}

function getAverages(arr) {
    return arr.map(({nombre, ape1, ape2, expediente, notas})=>{
        let nota =0;
        let cont =0;

        for (let i in notas){
            nota+=notas[i];
            cont++;
        }
        return{
            alumno: `${nombre} ${ape1} ${ape2}`,
            expediente,
            nota: (notas/contador).toFixed(1)
        }
    }) 
}