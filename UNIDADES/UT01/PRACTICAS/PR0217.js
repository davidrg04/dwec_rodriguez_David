let bytes=convertCapacity(1,'Gigabyte', 'MB');
alert(`El resultado es ${bytes}`);

function convertCapacity(n,from,to) {
    let bytes=convertToBytes(n,from);
    let resultado= (to =='Byte'||to=='B') ? bytes:
    (to=='Kilobyte'|| to=='KB') ? bytes/1000:
    (to=='Megabyte'|| to=='MB') ? bytes/1000000:
    (to=='Gigabyte'|| to=='GB') ? bytes/1000000000:
    (to=='Terabyte'|| to=='TB') ? bytes/1000000000000:
    (to== 'Petabyte'||to=='PB') ? bytes/1000000000000000:
    (to=='Exabyte'||to=='EB') ? bytes/(1*Math.pow(10,18)) : isNaN;

    return resultado;
}



function convertToBytes(capacidad,unidad) {
    let bytes= (unidad =='Byte'||unidad=='B') ? capacidad:
            (unidad=='Kilobyte'|| unidad=='KB') ? capacidad*1000:
            (unidad=='Megabyte'|| unidad=='MB') ? capacidad*1000000:
            (unidad=='Gigabyte'|| unidad=='GB') ? capacidad*1000000000:
            (unidad=='Terabyte'||unidad=='TB') ? capacidad*1000000000000:
            (unidad== 'Petabyte'||unidad=='PB') ? capacidad*1000000000000000:
            (unidad=='Exabyte'||unidad=='PB') ? capacidad*(1*Math.pow(10,18)) : isNaN;
    return bytes;

}