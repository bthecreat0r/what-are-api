const dogImageDiv=document.getElementById('dogImage');
const dogButton=document.getElementById('dogButton');

console.log('Hello');
const getNewDog = () => {
//https://dog.ceo/api/breeds/image/random
fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
    

    dogImageDiv.innerHTML = `<img src='${json.message}'
    height=300 width=300/>`

})
};

dogButton.onclick = () => getNewDog();

console.log('hello2');