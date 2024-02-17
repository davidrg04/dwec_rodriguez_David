document.getElementById('inputFecha').addEventListener('blur',checkDate);

function checkDate(e) {
    let spanFecha = document.getElementById('spanFecha');

    (/[0-3][0-9]\/((1[0-2])|(0[0-9]))\/[12][0-9]{3}/.test(e.target.value)) ? spanFecha.innerHTML='Correcto' : spanFecha.innerHTML='Porfavor ajustese al patro dd/mm/aaaa';
}


document.getElementById('inputPhone').addEventListener('blur',checkPhone);

function checkPhone(e) {
    let spanPhone = document.getElementById('spanPhone');

    (/\(\+[0-9]{2}\)(( [0-9]{3} [0-9]{3} [0-9]{3})|([0-9]{9}))/.test(e.target.value)) ? spanPhone.innerHTML='Correcto' : spanPhone.innerHTML= 'Porfavor ajustese al formato'
}

document.getElementById('inputMail').addEventListener('blur',checkEmail);

function checkEmail(e) {
    let spanMail = document.getElementById('spanMail');

    (/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(e.target.value)) ? spanMail.innerHTML='Correcto' : spanMail.innerHTML='Porfavor ajustese al formato'
}

document.getElementById('inputColor').addEventListener('blur',checkColor);

function checkColor(e) {
    let spanColor = document.getElementById('spanColor');

    (/(#[0-9a-fA-F]{6})/.test(e.target.value)) ? spanColor.innerHTML='Correcto' : spanColor.innerHTML='Porfavor ajustese al formato'
}

document.getElementById('inputIP').addEventListener('blur',checkIP);

function checkIP(e) {
    let spanIP = document.getElementById('spanIP');

    (/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/.test(e.target.value)) ? spanIP.innerHTML='Correcto' : spanIP.innerHTML='Porfavor ajustese al formato'
}

document.getElementById('inputUrl').addEventListener('blur',checkURL);

function checkURL(e) {
    let spanURL = document.getElementById('spanUrl');

    (/(http|https):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(e.target.value)) ? spanURL.innerHTML='Correcto' : spanURL.innerHTML='Porfavor ajustese al formato'
}

document.getElementById('inputPass').addEventListener('blur',checkPass);

function checkPass(e) {
    let spanPass = document.getElementById('spanPass');

    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(e.target.value)) ? spanPass.innerHTML='Correcto' : spanPass.innerHTML='Porfavor ajustese al formato'
}

document.getElementById('inputNif').addEventListener('blur',checkNif);

function checkNif(e) {
    let spanNif = document.getElementById('spanNif');

    (/^\d{7,8}[A-Z]$/.test(e.target.value)) ? spanNif.innerHTML='Correcto' : spanNif.innerHTML='Porfavor ajustese al formato'
}

document.getElementById('inputMatricula').addEventListener('blur',checkMatricula);

function checkMatricula(e) {
    let spanMatricula = document.getElementById('spanMatricula');

    (/^\d{4}[A-Z]{3}$/.test(e.target.value)) ? spanMatricula.innerHTML='Correcto' : spanMatricula.innerHTML='Porfavor ajustese al formato'
}