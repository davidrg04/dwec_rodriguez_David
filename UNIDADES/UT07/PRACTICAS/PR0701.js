let url = "https://swapi.dev/api/planets";
let container = document.getElementById("container");


function renderData(data) {
    console.log(data);
    data.results.forEach(planet => {
        let element  = document.createElement("div")
        element.classList.add("flex", "flex-col", "shadow-md", "w-60", "m-2.5");

        element.innerHTML = 
            `
             <p>Planeta</p>
             <p>Nombre : ${planet.name}</p>
             <p>Clima: ${planet.climate}</p>
             <p>Gravead :${planet.gravity}</p>
             <p>Población :${planet.population}</p>   
            `;
        container.append(element);
    })
}

function getData(){
    fetch( url )
        .then(response => response.json())
        .then( data => {
            renderData(data);
        })
        // .catch(error =>{
        //     console.log("ERROR AL OBTENER DATOS");
        // });
};

getData();