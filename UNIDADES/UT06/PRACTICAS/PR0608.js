// let data = [
//     { provincia: 'Leon', localidad: 'Villamandos', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Leon', localidad: 'Leon', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Leon', localidad: 'Astorga', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Leon', localidad: 'Ponferrada', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Zamora', localidad: 'Benavente', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Zamora', localidad: 'Zamora', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Zamora', localidad: 'Toro', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'Zamora', localidad: 'Villalpando', comunidadAutonoma: 'Castilla y León' },
//     { provincia: 'A Coruña', localidad: 'Santiago de Compostela', comunidadAutonoma: 'Galicia' },
//     { provincia: 'A Coruña', localidad: 'A Coruña', comunidadAutonoma: 'Galicia' },
//     { provincia: 'A Coruña', localidad: 'Ferrol', comunidadAutonoma: 'Galicia' },
//     { provincia: 'A Coruña', localidad: 'Betanzos', comunidadAutonoma: 'Galicia' },
//     { provincia: 'Álava', localidad: 'Vitoria-Gasteiz', comunidadAutonoma: 'País Vasco' },
//     { provincia: 'Álava', localidad: 'Llodio', comunidadAutonoma: 'País Vasco' },
//     { provincia: 'Álava', localidad: 'Amurrio', comunidadAutonoma: 'País Vasco' },
//     { provincia: 'Álava', localidad: 'Salvatierra', comunidadAutonoma: 'País Vasco' },
//     { provincia: 'Albacete', localidad: 'Albacete', comunidadAutonoma: 'Castilla-La Mancha' },
//     { provincia: 'Albacete', localidad: 'Hellín', comunidadAutonoma: 'Castilla-La Mancha' },
//     { provincia: 'Albacete', localidad: 'Villarrobledo', comunidadAutonoma: 'Castilla-La Mancha' },
//     { provincia: 'Albacete', localidad: 'Almansa', comunidadAutonoma: 'Castilla-La Mancha' },
//     { provincia: 'Alicante', localidad: 'Alicante', comunidadAutonoma: 'Comunidad Valenciana' },
//     { provincia: 'Alicante', localidad: 'Elche', comunidadAutonoma: 'Comunidad Valenciana' },
//     { provincia: 'Alicante', localidad: 'Benidorm', comunidadAutonoma: 'Comunidad Valenciana' },
//     { provincia: 'Alicante', localidad: 'Denia', comunidadAutonoma: 'Comunidad Valenciana' },
//     { provincia: 'Zaragoza', localidad: 'Zaragoza', comunidadAutonoma: 'Aragón' },
//     { provincia: 'Zaragoza', localidad: 'Calatayud', comunidadAutonoma: 'Aragón' },
//     { provincia: 'Zaragoza', localidad: 'Utebo', comunidadAutonoma: 'Aragón' },
//     { provincia: 'Zaragoza', localidad: 'Ejea de los Caballeros', comunidadAutonoma: 'Aragón' },

//     { provincia: 'Cádiz', localidad: 'Cádiz', comunidadAutonoma: 'Andalucía' },
//     { provincia: 'Cádiz', localidad: 'Jerez de la Frontera', comunidadAutonoma: 'Andalucía' }
// ];


// let selectComunidades = document.getElementById('comunidadAutonoma');
// let selectProvincias = document.getElementById('provincia');
// let selectLocalidades = document.getElementById('localidad');



// let nombres=[];

// selectComunidades.addEventListener('change',()=>{
//     selectLocalidades.innerHTML='';
//     selectLocalidades.setAttribute('disabled','');
// })


// selectComunidades.options[selectComunidades.options.length] = new Option(``, ``);
// data.map(opcion => opcion.comunidadAutonoma)
//     .forEach(comunidadAutonoma => {
//         if (!nombres.includes(comunidadAutonoma)) {
//             nombres.push(comunidadAutonoma);
//             selectComunidades.options[selectComunidades.options.length] = new Option(comunidadAutonoma, comunidadAutonoma);
//         };
// });


// selectComunidades.addEventListener('change',cargarProvincias);


// function cargarProvincias(e) {
//     let nombresProvincia=[];
//     selectProvincias.innerHTML='';
//     let opcionComunidad = selectComunidades.value;
//     if (opcionComunidad =='') {
//         selectProvincias.setAttribute('disabled','');
//     }else{
//         selectProvincias.options[selectProvincias.options.length] = new Option('','');
//         data.filter(opcion=>opcion.comunidadAutonoma == opcionComunidad)
//             .map(opcion2=>opcion2.provincia)
//             .forEach(provincia =>{
//             if (!nombresProvincia.includes(provincia)) {
//                 nombresProvincia.push(provincia);
//                 selectProvincias.options[selectProvincias.options.length] = new Option(provincia,provincia);
//             }
//         });

//         selectProvincias.removeAttribute('disabled');

//     }
// }

// selectProvincias.addEventListener('change',cargarLocalidades);

// function cargarLocalidades(e) {
//     let nombresLocalidad=[];
//     selectLocalidades.innerHTML='';
//     let opcionProvincia = selectProvincias.value;
//     if (opcionProvincia =='') {
//         selectLocalidades.setAttribute('disabled','');
//     }else{
//         data.filter(opcion=>opcion.provincia == opcionProvincia)
//             .map(opcion2=>opcion2.localidad)
//             .forEach(localidad =>{
//             if (!nombresLocalidad.includes(localidad)) {
//                 nombresLocalidad.push(localidad);
//                 selectLocalidades.options[selectLocalidades.options.length] = new Option(localidad,localidad);
//             }
//         });

//         selectLocalidades.removeAttribute('disabled');

//     }
// }



let selectComunidades = document.getElementById('comunidadAutonoma');
let selectProvincias = document.getElementById('provincia');
let selectLocalidades = document.getElementById('localidad')
selectComunidades.options[selectComunidades.options.length] = new Option('', '');
for (let comunidad in data2) {
    // console.log(comunidad);
    selectComunidades.options[selectComunidades.options.length] = new Option(comunidad, comunidad);
}


selectComunidades.addEventListener('change',()=>{
    selectLocalidades.innerHTML='';
    selectLocalidades.setAttribute('disabled','');
});



selectComunidades.addEventListener('change', cargarProvincias);

function cargarProvincias(e) {
    selectProvincias.innerHTML='';
    if (selectComunidades.value == '') {
        selectProvincias.setAttribute('disabled','');
    }else{
        console.log(selectComunidades.value);
        selectProvincias.options[selectProvincias.options.length] = new Option('', '');
        for (let provincia in data2[selectComunidades.value]) {
            console.log(provincia);
            selectProvincias.options[selectProvincias.options.length] = new Option(provincia, provincia);
        }
        selectProvincias.removeAttribute('disabled');
    }
}


selectProvincias.addEventListener('change',cargarLocalidades);

function cargarLocalidades(e) {
    selectLocalidades.innerHTML='';

    if (selectProvincias.value == '') {
        selectLocalidades.setAttribute('disabled','');
    } else {
        selectLocalidades.options[selectLocalidades.options.lenght] = new Option('','');
        // for (let localidad in data2[selectComunidades.value][selectProvincias.value]) {
            
        //     
        // } 

        data2[selectComunidades.value][selectProvincias.value].forEach(localidad => {
            selectLocalidades.options[selectLocalidades.options.length] = new Option(localidad,localidad);
        });
        selectLocalidades.removeAttribute('disabled');
    }
    }
   