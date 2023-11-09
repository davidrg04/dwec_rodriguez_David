let numeros="";
for (let i = 1; i <= 31; i++) {
    numeros +=`<span class = "number">${i}</span>`;
}
let div = document.getElementById('numbers');
div.innerHTML = numeros;


