




console.log(isHeterograma("Victor"));






function isHeterograma(cadena) {
    
    for (let char of cadena) {
        let cont = 0;
        for (let char2 of cadena) {
            cont = (char == char2) ? cont+1 : cont;
            
        }

        if (cont >=2) {return false};
    }
    return true;
}