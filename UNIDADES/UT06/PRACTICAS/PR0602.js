let contenedor = document.getElementById('board');


// contenedor.setAttribute("onmousedown","return false")
contenedor.onmousedown = () => false;
function rellenar() {
    
    let contador = 1;

    for (let i = 0; i <10; i++) {
        
        let divFuera = document.createElement('div');
        divFuera.classList.add("fila");

        for (let j = 0; j <10; j++) {
            let divDentro = document.createElement('div');
            divDentro.textContent = contador;
            divDentro.classList.add("celda");
            contador++;
            divFuera.append(divDentro);
        }
        contenedor.append(divFuera);
    }
}

contenedor.addEventListener('click',handleClick);
contenedor.addEventListener('contextmenu',handleClick2)


function handleClick(e) {
    if (e.target.classList.contains("celda")) {
        if (!e.target.classList.contains("derecha")) {
            e.target.classList.toggle("selected");
            
        }
        mostrarCordenadas(e);
    }
    
    
}
function handleClick2(e) {
    e.target.classList.remove("selected");
    e.target.classList.add("derecha");

    mostrarCordenadas(e);
}

function mostrarCordenadas(e) {
    document.getElementById("coordenadas").innerHTML = "";
    document.getElementById("coordenadas").textContent = `Coordenadas ${e.target.textContent}`;
}

rellenar();