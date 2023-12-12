const data = [
    {
        text:'uno',
        selected: false
    },
    {
        text:'segundo',
        selected: false
    },
    {
        text:'tercero',
        selected: false
    },
    {
        text:'cuarto',
        selected: false
    },
    {
        text:'quinto',
        selected: false
    }

];
let lastSelected = undefined;

let ul = document.getElementById("lista");

function renderList() {
    ul.innerHTML = "";

    data.forEach( ({text,selected}) =>{
        let li = document.createElement("li");
        li.textContent = text;
        
        (selected) ? li.classList.add("selected") : li.classList.remove("selected");

        ul.append(li);
    });
}


ul.addEventListener('click',seleccionar);
// ul.setAttribute('onmousedown','return false');
ul.onmousedown = () => false;

function seleccionar(e) {
    
    if (e.ctrlKey) {
        const elemento = data.find(li => li.text == e.target.textContent);
        elemento.selected = !elemento.selected;
        renderList();
    } else if(e.shiftKey) {
        // data.forEach( item => item.selected = false);
        // const elemento = data.find(li => li.text == e.target.textContent);
        // // if (lastSelected) {
        // //     data.forEach( (item,index) =>{
        // //         if (index >= Math.min(lastSelected))
        // //     });

            
        // }else{
        //     lastSelected = elemento.text;
        //     elemento.selected = true;
        // }

    }else{
        data.forEach(item =>{
            if (item.text !== e.target.textContent) {
                item.selected = false;
            }
        });

        // data = data.map(({text}) => {
        //     return{
        //         text,
        //         selected : false
        //     };
        // })
    
        const elemento = data.find(li => li.text == e.target.textContent);
        elemento.selected = !elemento.selected;
        renderList();
    }

    
}
renderList();


// ul.addEventListener('click', handleClick);


// function handleClick(e) {
//     e.target.classList.toggle("selected");
   
// }

    