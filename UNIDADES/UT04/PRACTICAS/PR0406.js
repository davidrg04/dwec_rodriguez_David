let boton = document.querySelector('[type="button"]');
console.log(`#${ (Math.random()*16777215).toString(16) }`);
boton.addEventListener('click', () => document.body.style.backgroundColor = `#${ Math.floor(Math.random()*16777215).toString(16) }`);
