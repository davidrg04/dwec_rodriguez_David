
let div = document.createElement('div');
div.id = "numbers";
for (let i = 1; i <= 31; i++) {
    let span = document.createElement('span');
    span.classList.add("number");
    span.textContent = i;
    div.append(span);
}


let body = document.body;

let h1=document.createElement('h1');
h1.textContent = "PR041";
body.append(h1);
body.append(div);




// let div = document.createElement('div');
// div.id = "numbers";
// let numeros = "";
// for (let i = 1; i <= 30; i++) {
//     numeros +=`<span class = "number">${i}</span>`;
// }
// div.innerHTML = numeros;

// let body = document.body;

// let h1=document.createElement('h1');
// h1.innerHTML = "PR041";
// body.append(h1);
// body.append(div);





