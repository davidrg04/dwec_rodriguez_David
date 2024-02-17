document.getElementById('sacarFechas').addEventListener('click', remplazarFechas);

function remplazarFechas() {
    let texto = document.getElementById('texto').value;
    
    let textoCambiado = texto.replace(/\b(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(\d{4})\b/g, function(match, day, month, year) {
        let fecha = new Date(year, month - 1, day);
        if (fecha.getFullYear() == year && fecha.getMonth() + 1 == month && fecha.getDate() == day) {
            return `${day} del ${month} de ${year}`;
        } else {
            return match; 
        }});


        document.querySelector('.modal-body').innerHTML = textoCambiado;

}

