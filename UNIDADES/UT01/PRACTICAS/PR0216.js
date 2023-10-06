
let bytes=convertToBytes(1,'Gigabyte');
alert(`La medida convertida es ${bytes}`);



function convertToBytes(capacidad,unidad) {
    let bytes= (unidad =='Byte'||unidad=='B') ? capacidad:
            (unidad=='Kilobyte'|| unidad=='KB') ? capacidad*1000:
            (unidad=='Megabyte'|| unidad=='MB') ? capacidad*1000000:
            (unidad=='Gigabyte'|| unidad=='GB') ? capacidad*1000000000:
            (unidad=='Terabyte'||unidad=='TB') ? capacidad*1000000000000:
            (unidad== 'Petabyte'||unidad=='PB') ? capacidad*1000000000000000:
            (unidad=='Exabyte'||unidad=='EB') ? capacidad*(1*Math.pow(10,18)) : isNaN;
    return bytes;

}