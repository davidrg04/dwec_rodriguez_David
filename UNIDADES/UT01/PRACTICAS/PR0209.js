let calle=prompt('¿En que calle vives? (Escribe calle su_nombre)');

if (calle.toUpperCase()=='CALLE LOS CLAVELES' || calle.toUpperCase()=='CALLE EL ROSAL' || calle.toUpperCase()=='CALLE LAS HORTENSIAS' || calle.toUpperCase()=='CALLE LAS MARGARITAS') {
    alert(`Tienes que tomar la Línea 1 para ir desde la ${calle} hasta el trabajo`);
}else if (calle.toUpperCase()=='CALLE TELENO' || calle.toUpperCase()=='CALLE CATOUTE' || calle.toUpperCase()=='CALLE PEÑA UBIÑA' || calle.toUpperCase()=='CALLE VIZCODILLO') {
    alert(`Tienes que tomar la Línea 2 para ir desde la ${calle} hasta el trabajo`)
}else if (calle.toUpperCase()=='CALLE ASTORGA' || calle.toUpperCase()=='CALLE LA BAÑEZA' || calle.toUpperCase()=='CALLE BENAVENTE') {
    alert(`Tienes que tomar la Línea 3 para ir desde la ${calle} hasta el trabajo`)
} else {
    alert(`No encontramos ninguna linea para ir desde la ${calle} hasta el trabajo`)
}