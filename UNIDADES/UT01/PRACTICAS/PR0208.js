let edad=Number(prompt('Dime cuando naciste y te dire a que generacion perteneces'));

if (edad<=2010 && edad>=1994) {
    alert(`Perteneces a la Generación Z, ya que naciste en ${edad}`);
}else if (edad<=1993 && edad>=1981){
    alert(`Perteneces a la Generación Millenial, ya que naciste en ${edad}`);
}else if(edad<=1980 && edad>=1969){
    alert(`Perteneces a la Generación X, ya que naciste en ${edad}`);
}else if (edad<=1968 && edad>=1949) {
    alert(`Pertenece a la Generación Baby Boomer, ya que naciste en ${edad}`);
}else{
    alert(`No perteneces a ninguna generacion`);
}