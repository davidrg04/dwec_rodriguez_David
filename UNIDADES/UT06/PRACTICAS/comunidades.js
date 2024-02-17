const data = [
    {
        id:1,
        comunidad: 'Castilla y León',
        provincias : {
            id: 'p1',
            provincia: 'León',
            localidades: [
                'León','San Andres'
            ]
        }
    }
];

const data2 = {
    'Castilla y León':{
        'Leon': ['Leon','San Andrés','La Bañeza'],
        'Zamora':['Zamora','Benavente','San Cristobal de Entreviñas'],
    },
    'Asturias':{
        'Asturias':['Oviedo','Gijon','Aviles']
    },
    'Pais Vasco':{
        'Alava' : ['Llodio','Vitoria','Amurrio']
    },
    'Castilla La Mancha':{
        'Albacete': ['Hellin','Villarrobledo']
    },
    'Galicia':{
        'A Coruña': ['A Coruña','Ferrol','Santiago de Compostela']
    },
    'Aragon':{
        'Zaragoza': ['Zaragoza','Utebo','Calatayud']
    }
};

// for (let prop in data2[Castilla y León]) {
//     console.log(prop);
//     console.log(data2['Castilla y León'][prop]);
// }