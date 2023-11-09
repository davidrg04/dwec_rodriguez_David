
let listas = document.getElementsByTagName('li');
console.log(listas);

let enlaces = {
    Google : 'https://google.com',
    DuckDuckGo : 'https://duckduckgo.com',
    Bing : 'https://www.bing.com',
    Ecosia : 'https://www.ecosia.org/',
    WolframAlpha  : 'https://www.wolframalpha.com/'
};

for (let li of listas) {
    li.innerHTML = `<a href = ${enlaces[li.textContent]}>${li.textContent}</a>`;
};