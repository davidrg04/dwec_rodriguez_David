let arr = [
    {   name: 'David',
        surname: 'Rodriguez',
    },
    {
        name: 'Lucía',
        surname: 'Muñiz',
    }]

    generateUsername(arr);

for (let item of arr) {
    console.log(item.name);
    console.log(item.surname);
    console.log(item.nickname);
}

function generateUsername(arr) {
    arr.forEach(function(item) {
        let nickname= item.name.charAt(0)+item.surname+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString();
        item.nickname = nickname;
    });
}