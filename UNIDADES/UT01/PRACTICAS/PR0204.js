let radioCirculo = Number(prompt(`Indica el radio del circulo`));
let perimetro= 2*3.14*radioCirculo;
let area=perimetro*Math.pow(radioCirculo, 2);
let mensaje = `El perímetro del círculo de radio ${radioCirculo}, es ${perimetro} y el area es ${area}`;
alert(mensaje);