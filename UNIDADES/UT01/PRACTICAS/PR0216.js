
let bytes=convertToBytes(1,'Gigabyte');
alert(`La medida convertida es ${bytes}`)

function convertToBytes(capacidad,unidad){
    let bytes=0;
    
    if (unidad=='Byte' || unidad=='B') {
        bytes=capacidad
        return bytes;
    }else if (unidad =='Kilobyte' || unidad=='KB') {
        bytes=capacidad*1000;
        return bytes;
    }else if (unidad =='Megabyte' || unidad=='MB'){
        bytes=capacidad*1000000;
        return bytes;
    }else if (unidad =='Gigabyte' || unidad=='GB') {
        bytes=capacidad*1000000000;
        return bytes;
    }else if (unidad =='Terabyte' || unidad=='TB') {
        bytes=capacidad*1000000000000;
        return bytes;
    }else if (capacidad =='Petabyte' || unidad=='PB') {
        bytes=capacidad*1000000000000;
        return bytes;
    }else if (capacidad == 'Exabyte' || unidad=='Exabyte') {
        bytes=capacidad*1000000000000000;
        return bytes;
    }else{
        bytes='No se reconoce la medida';
        return bytes;
    }
}