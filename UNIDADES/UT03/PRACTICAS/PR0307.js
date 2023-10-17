

countVowels("A vzb eu")



function countVowels(str) {
    let cadena=str.toUpperCase();
    
    let contador=0;
    for (let char of cadena) {
        contador+=(char=='A'| char=='E' | char=='I' | char=='O' | char=='U') ? 1 : 0;
    }

    console.log(contador);
}