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

addNif(arr);
console.log(arr);

function addNif(arr) {
    arr.forEach(persona => {
        let letra = (Number(persona.dni)%23==0) ? 'T' : (Number(persona.dni)%23==1)
                                                ? 'R' : (Number(persona.dni)%23==2)
                                                ? 'W' : (Number(persona.dni)%23==3)
                                                ? 'A' : (Number(persona.dni)%23==4)
                                                ? 'G' : (Number(persona.dni)%23==5)
                                                ? 'M' : (Number(persona.dni)%23==6)
                                                ? 'Y' : (Number(persona.dni)%23==7)
                                                ? 'F' : (Number(persona.dni)%23==8)
                                                ? 'P' : (Number(persona.dni)%23==9)
                                                ? 'D' : (Number(persona.dni)%23==10)
                                                ? 'X' : (Number(persona.dni)%23==11)
                                                ? 'B' : (Number(persona.dni)%23==12)
                                                ? 'N' : (Number(persona.dni)%23==13)
                                                ? 'J' : (Number(persona.dni)%23==14)
                                                ? 'Z' : (Number(persona.dni)%23==15)
                                                ? 'S' : (Number(persona.dni)%23==16)
                                                ? 'Q' : (Number(persona.dni)%23==17)
                                                ? 'V' : (Number(persona.dni)%23==18)
                                                ? 'H' : (Number(persona.dni)%23==19)
                                                ? 'L' : (Number(persona.dni)%23==20)
                                                ? 'C' : (Number(persona.dni)%23==21)
                                                ? 'K' : 'E';

        persona.nif=persona.dni+letra;

    });


    
}