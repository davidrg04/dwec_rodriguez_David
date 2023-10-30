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
        let nickname= `${item.name[0]}${item.surname}${(Math.random()*100).toFixed(0).padStart(2,"0")}`.toLowerCase();
        item.nickname = nickname;
    });
}