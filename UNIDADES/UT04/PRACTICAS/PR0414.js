let products = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 410,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 245,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 170,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 135,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 160,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 210,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 260,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 115,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 415,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 520,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 310,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 155,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 180,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 320,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
  ]


let elementsPerPage = 8;
let currentPage = 0;
let filter = "";
let productosCarrito = [];
paginasTotales = Math.ceil(products.length / elementsPerPage);

  let divProductos = document.getElementById("products-section");



  function mostrarProductos() {
    let divProductos = document.getElementById("products-section");
    divProductos.innerHTML = "";
    products
        .filter(({product}) => product.toLowerCase().includes(filter))
        .filter((item,index) =>{
           
            return Math.trunc(index/elementsPerPage) == currentPage;
        })
        .forEach(({image,price,product}) =>{
       
        let divProduct = document.createElement('div');
        divProduct.classList.add('product');


        let divFotoProducto = document.createElement('div');
        divFotoProducto.classList.add('product-foto');
        divFotoProducto.innerHTML = `<img src="${image}" alt="Foto de ${product}">`;


        let divProductoDatos = document.createElement('div');
        divProductoDatos.classList.add('product-data');
        divProductoDatos.innerHTML
        = `
            <div class = "fruit-name">${product}</div>
            <div class = "price">${(price/100).toFixed(2)}/KG</div>
            <div class = ".btn btn-add-product" data-producto="${product}">Añadir</div>
        `;


        divProduct.append(divFotoProducto,divProductoDatos);
        divProductos.append(divProduct);
        
    });
    paginasTotales = Math.ceil((products.filter(({ product }) => product.toLowerCase().includes(filter)).length) / elementsPerPage);
    document.getElementById("actual").textContent = `Pagina ${currentPage +1} de ${paginasTotales}`;
    cargarBotonesAniadir();
  }
    

  function cargarBotonesAniadir() {
    document.querySelectorAll('div.product-data div:last-child').forEach(divAdd =>{
        divAdd.addEventListener('click',aniadir=>{
            
            let nameProducto = aniadir.currentTarget.getAttribute("data-producto");
            aniadirCarrito(nameProducto);
        })
      });
  }



  document.querySelector("#buscar div:last-child").addEventListener('click', ()=>{
    filter = document.getElementById("buscar-text").value
                                                  .trim()
                                                  .toLowerCase();
    
                                                  currentPage=0;
    mostrarProductos();

  });

  


  function aniadirCarrito(nameProducto) {
    let producto = products.find(({ product }) => product == nameProducto);
    
    let productoEnCarro = productosCarrito.find(({ product }) => product == producto.product);

    if (productoEnCarro) {
        productoEnCarro.cantidad += 1;
        productoEnCarro.price = (parseFloat(productoEnCarro.price) + parseFloat(producto.price / 100)).toFixed(2);
    } else {
        let nuevoProducto = { ...producto, cantidad: 1, price: (producto.price / 100).toFixed(2) };
        productosCarrito.push(nuevoProducto);
    }

    // Vaciar el contenido del carrito antes de mostrar los productos actualizados
    document.getElementById("productoEnCarro").innerHTML = "";

    // Mostrar los productos actualizados en el carrito
    productosCarrito.forEach(producto => {
        document.getElementById("productoEnCarro").innerHTML +=
            `
            <div>${producto.cantidad}</div>
            <div>${producto.product}</div>
            <div>${producto.price}</div>
            `;
    });

    precioTotal();
}

function precioTotal() {
  document.getElementById("precioTotal").textContent = "";
  
  const total = productosCarrito.reduce((acum, item) => {
    // console.log(typeof(item.price));
    // console.log(typeof(parseFloat(item.price)));
    return acum + parseFloat(item.price);
  }, 0);

  document.getElementById("precioTotal").textContent = total.toFixed(2); // Mostrar el total con dos decimales
}

document.getElementById("siguiente").addEventListener('click', ()=>{
  currentPage = (currentPage < paginasTotales - 1) ? currentPage+1 : currentPage;
  filter = "";
  mostrarProductos();
});

document.getElementById("atras").addEventListener('click', ()=>{
  currentPage = (currentPage > 0) ? currentPage-1 : currentPage;
  filter = "";
  mostrarProductos();
})


mostrarProductos();

    
