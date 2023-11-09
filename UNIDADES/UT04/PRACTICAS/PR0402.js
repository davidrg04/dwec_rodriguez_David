let contenido="";

for (let i = 1; i <= 7; i++) {
    let nombreMes = (i==1) ? 'Enero' : 
                    (i==2) ? 'Febrero' :
                    (i==3) ? 'Marzo' :
                    (i==4) ? 'Abril' :
                    (i==5) ? 'Mayo' :
                    (i==6) ? 'Junio' : 'Julio';
    contenido += `<div class="month">
                    <div class="month-number">${i}</div>
                    <div class="month-name">${nombreMes}</div>
                </div>`;
};

document.getElementById('months').innerHTML = contenido;