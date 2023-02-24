
const hub = document.querySelector('.container')

let div = document.createElement('div')
let h2 = document.createElement('h2')
hub.appendChild(div);
div.appendChild(h2);

export const renderChuck = (Norris) => {
    h2.textContent = Norris.value;
   
    console.log(Norris);
    
}


