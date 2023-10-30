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




let generateAverageGrade = (str) => {
    let contador=0;
    let notas=0;
    arr.forEach(estudiante =>{
        contador++;
        if (estudiante.notas.hasOwnProperty(str)) {
            notas+=estudiante.notas[str];
        }else{
            return 'El modulo no existe';
        }
        
    });
    
    return (notas/contador).toFixed(1);
};

console.log(generateAverageGrade('DIW'));
