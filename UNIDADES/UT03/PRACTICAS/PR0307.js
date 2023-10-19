
let contador;
console.log(countVowels("A vzb eu"));



function countVowels(str) {
    let contador=0;
    for (let char of str.toUpperCase()) {
        contador+=(char=='A'| char=='E' | char=='I' | char=='O' | char=='U') ? 1 : 0;
    }

    return contador
}