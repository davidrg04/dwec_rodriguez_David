console.log(xO('xooxx'));


function xO(cadena) {
    let contX = cadena.toLowerCase()
                      .split('')
                      .filter(char => char =='x').length;
    let contO = cadena.toLowerCase()
                    .split('')
                    .filter(char => char =='o').length;

    return contX == contO;
}