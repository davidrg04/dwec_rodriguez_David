
let arrayMeses = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let div = document.createElement('div');
div.id="months";

arrayMeses.forEach((mes, indice) => {
    let divMonth = document.createElement('div');
    divMonth.classList.add = "month";
    let divNumero = document.createElement('div');
    divNumero.classList.add = "month-number"
    let divMes = document.createElement('div');
    divMes.classList.add = "month-name";

    divNumero.innerHTML = indice+1;
    divMes.innerHTML = mes;
    divMonth.append(divNumero);
    divMonth.append(divMes);
    div.append(divMonth);
});



let body = document.body;

let h12=document.createElement('h1');
h12.innerHTML = "PR042";
body.append(h12);
body.append(div);

