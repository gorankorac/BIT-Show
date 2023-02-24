
import { getChuck } from "./data.js";
import { renderChuck } from "./ui.js";

 const btn = document.querySelector('.btn')
 

const responsiveData = () => 
  getChuck()
  .then((chuckData) => {
    console.log(chuckData);
    renderChuck(chuckData)
  })
  

btn.addEventListener('click', responsiveData)

