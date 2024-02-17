let dif=0;
let letras = 'abcdefghijklmnñopqrstuvwxyz';
let numeros = '0123456789';
let tieneMinuscula = 0;
let tieneMayuscula = 0;
let tieneNumero = 0;
let tieneSimbolo = 0;

let correo = document.getElementById("correoInput");

correo.addEventListener('blur',correoElectronico);

function correoElectronico(e) {
    document.getElementById("error").innerHTML= "";
    if (!correo.value.includes('@') || !correo.value.includes('.')) {
        correo.classList.add('incorrecto');
        document.getElementById("error").innerHTML= "EL EMAIL NO ES VALIDO";
    }else{
        if (correo.classList.contains("incorrecto")) {
            correo.classList.remove("incorrecto");
        }
        correo.classList.add("correcto");
    }
}

let contraseña = document.getElementById("pass");

contraseña.addEventListener('input',comprobarContraseña);

function comprobarContraseña(e) {
    dif = 0;
    let pass = e.target.value.trim();
    dif+=3*Math.floor(pass.length/3);
    

    pass.split('').forEach(caracter => {
        tieneMinuscula = (letras.includes(caracter)) ? 1 : tieneMinuscula;
        tieneMayuscula = (letras.toUpperCase().includes(caracter)) ? 1 : tieneMayuscula;
        tieneNumero = (numeros.includes(caracter)) ? 1 : tieneNumero;
    });

    let hasSymbol = pass.split('').reduce( (acum, l) => {
        console.log(l);
        let isSymbol = !letras.includes(l) && !letras.toUpperCase().includes(l) && !numeros.includes(l);
        return acum || isSymbol;
    }, false );
    hasSymbol = (hasSymbol) ? 1 : 0;
    console.log(`Cantidad mayus ${tieneMayuscula}`);
    console.log(`Cantidad minus ${tieneMinuscula}`);
    console.log(`Cantidad num ${tieneNumero}`);
    console.log(`Cantidad sim ${hasSymbol}`);
    console.log(`Valor dif ${dif}`);
    
    dif +=tieneMayuscula+tieneMinuscula+tieneNumero+hasSymbol;

   

    colorearInput()    
}

function colorearInput() {
    console.log(dif);

    if (dif <= 6) {
        contraseña.className = '';
        contraseña.classList.add('form-control');
        contraseña.classList.add('muyDebil');
    } else if (dif <= 8) {
        contraseña.className = '';
        contraseña.classList.add('form-control');
        contraseña.classList.add('debil');
    } else if (dif <= 10) {
        contraseña.className = '';
        contraseña.classList.add('form-control');
        contraseña.classList.add('aceptable');
    } else if (dif <= 12) {
        contraseña.className = '';
        contraseña.classList.add('form-control');
        contraseña.classList.add('segura');
    } else {
        contraseña.className = '';
        contraseña.classList.add('form-control');
        contraseña.classList.add('muySegura');
    }
}

let contraseña2 = document.getElementById('pass2');

contraseña2.addEventListener('blur',contraseñasIguales);

function contraseñasIguales(e) {
    console.log(document.getElementById('pass').value);
    console.log(contraseña2.value);
    if(contraseña.value !== contraseña2.value){
        document.getElementById("error").innerHTML= "";
        document.getElementById("error").innerHTML= "Las contraseñas no coinciden";
        contraseña2.classList.add('is-invalid');
        contraseña2.setAttribute('title','Las contraseñas no coinciden');
    }else{
        document.getElementById("error").innerHTML= "";
        contraseña2.classList.remove('is-invalid');
    }  
}


document.querySelector('form').addEventListener('submit',imprimirCorreo);


function imprimirCorreo(e) {
    console.log("hollaaaaaaa");
    e.preventDefault();

    if (correo.value.trim() !== "" && contraseña.value.trim() !== "" && contraseña.value === contraseña2.value) {
        console.log(`Correo : ${correo.value}, Contraseña ${contraseña.value}`);
        // e.target.submit();
    }else{
        document.getElementById("error").innerHTML= "";
        document.getElementById("error").innerHTML= "Revise los datos porfavor";
    }
}







