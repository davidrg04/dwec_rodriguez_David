
let bytes=convertToBytes(1,'Gigabyte');
alert(`La medida convertida es ${bytes}`)

// function convertToBytes(capacidad,unidad){
//     let bytes=0;
    
//     if (unidad=='Byte' || unidad=='B') {
//         bytes=capacidad
//         return bytes;
//     }else if (unidad =='Kilobyte' || unidad=='KB') {
//         bytes=capacidad*1000;
//         return bytes;
//     }else if (unidad =='Megabyte' || unidad=='MB'){
//         bytes=capacidad*1000000;
//         return bytes;
//     }else if (unidad =='Gigabyte' || unidad=='GB') {
//         bytes=capacidad*1000000000;
//         return bytes;
//     }else if (unidad =='Terabyte' || unidad=='TB') {
//         bytes=capacidad*1000000000000;
//         return bytes;
//     }else if (capacidad =='Petabyte' || unidad=='PB') {
//         bytes=capacidad*1000000000000;
//         return bytes;
//     }else if (capacidad == 'Exabyte' || unidad=='Exabyte') {
//         bytes=capacidad*1000000000000000;
//         return bytes;
//     }else{
//         bytes='No se reconoce la medida';
//         return bytes;
//     }

    
// }

function convertToBytes(capacidad,unidad) {
    let bytes= (unidad =='Byte'||unidad=='B') ? capacidad:
            (unidad=='Kilobyte'|| unidad=='KB') ? capacidad*1000:
            (unidad=='Megabyte'|| unidad=='MB') ? capacidad*1000000:
            (unidad=='Gigabyte'|| unidad=='GB') ? capacidad*1000000000:
            (unidad=='Terabyte'||unidad=='TB') ? capacidad*1000000000000:
            (unidad== 'Petabyte'||unidad=='PB') ? capacidad*1000000000000000:
            (unidad=='Exabyte'||unidad=='PB') ? capacidad*(1*Math.pow(10,18)) : 'No se encuentra la medida';
    return bytes;

}