let filter="";
let currentPage = 0;
let elementsPerPage = 5;
let paginasTotales = Math.ceil((data.length / elementsPerPage));
function renderCharacters() {
    let list = document.getElementById('people-list-characters');
    list.innerHTML="";
    data
        .filter(({name}) => name.toLowerCase().includes(filter))
        .filter((item,index) =>{
            return Math.trunc(index/elementsPerPage) == currentPage;
        })
        .forEach( ({name:charName, birth_year, homeworld}) => {
        list.innerHTML += `
        <div class="character">
            <div class="character-name">${charName}</div>
            <div class="character-birth-year">${birth_year ? birth_year : '-'}</div>
            <div class="homeworld">${homeworld.name ? homeworld.name : '-'}</div> 
            <div class="btn btn-char" data-nombrecaracter="${charName}">Detalle</div> 
        </div>
        `
    })
    paginasTotales = Math.ceil((data.filter(({ name }) => name.toLowerCase().includes(filter)).length) / elementsPerPage);
    document.querySelector("#pages span:nth-child(3)").textContent = `Pagina ${currentPage + 1} de ${paginasTotales}`;
    cargarBotones();
}



function handleFilterClick(e) {
    filter = document.getElementById("filter-text")
            .value
            .trim()
            .toLowerCase();
    currentPage = 0;
            renderCharacters();


}  

function cargarBotones() {
    let detalleBoton = document.querySelectorAll(".character div:last-child");
    detalleBoton.forEach(detalle =>{
        detalle.addEventListener('click', boton=>{
            let nombreCaracter = boton.currentTarget.getAttribute("data-nombrecaracter");
            aniadirPropiedades(nombreCaracter);
        });
    });
}

function aniadirPropiedades(nombreCaracter) {
    document.getElementById("detail-name").textContent = nombreCaracter;

    let personaje = data.find(({name}) => name == nombreCaracter);
    
    document.getElementById("height").textContent = `${personaje.height} cm.`;
    document.getElementById("mass").textContent = `${personaje.mass} kg.`;
    let colorPelo = personaje.hair_color ? personaje.hair_color : '-';
    
    document.getElementById("hair-color").textContent = (colorPelo !== '-') ? translate_colors[colorPelo].name : colorPelo;                                                   
                                                        // (colorPelo == "blond") ? 
                                                        // "Rubio" : (colorPelo == "black") ?
                                                        // "Moreno" : (colorPelo == "brown") ?
                                                        // "Castaño" : (colorPelo == null || colorPelo== undefined) ?
                                                        // "-" : "Ninguno";

    document.getElementById("hair-color-filled").style.backgroundColor = (colorPelo !== '-') ? translate_colors[colorPelo].code : 'black';
// (textoPelo == "Rubio") ?
// "yellow" : (textoPelo == "Moreno") ?
// "black" : (textoPelo == "Castaño") ?
// "#5c330a" : "grey";
    let colorOjos = personaje.eye_color ? personaje.eye_color : '-';
    document.getElementById("eye-color").textContent = (colorOjos !== '-') ? translate_colors[colorOjos].name : colorOjos;
    document.getElementById("eye-color-filled").style.backgroundColor = (colorOjos !== '-') ? translate_colors[colorOjos].code : "grey";
    document.getElementById("birth-year").textContent = personaje.birth_year ? personaje.birth_year : "-";
    document.getElementById("homeworld").textContent = personaje.homeworld.name ? personaje.homeworld.name : '-';
    document.getElementById("population").textContent = personaje.homeworld.population ? personaje.homeworld.population : '-';

    




}

document.querySelector(".btn-filter")
        .addEventListener('click',handleFilterClick);



document.getElementById("pages").innerHTML= `<span class="first">Primera</span>
                                                <span class="prev">Anterior</span>
                                                <span>Pagina ${currentPage + 1} de ${paginasTotales}</span>
                                                <span class="next">Siguiente</span>
                                                <span class="last">Última</span>`


document.querySelector("#pages .first").addEventListener('click', ()=>{
    currentPage = 0;
    renderCharacters();
});

document.querySelector("#pages .next").addEventListener('click', ()=>{
    currentPage = (currentPage < paginasTotales - 1) ? currentPage+1 : currentPage;
    console.log(currentPage);
    renderCharacters();
});

document.querySelector("#pages .prev").addEventListener('click', ()=>{
    currentPage = (currentPage > 0) ? currentPage-1 : currentPage;
    renderCharacters();
})
document.querySelector("#pages .last").addEventListener('click',() =>{
    currentPage = paginasTotales - 1;
    renderCharacters();
});


renderCharacters();



