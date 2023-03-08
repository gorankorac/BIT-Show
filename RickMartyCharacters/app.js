import { getCharacters } from "./data.js";
import { getSingleCharacter } from "./data.js";
import { renderCharacters } from "./ui.js";
import { renderSinglePage } from "./ui.js";

const singlePage = document.querySelector('.container')
const card = document.querySelector('.card')
const back = document.querySelector('#back');


const responseData = () => getCharacters()
  .then ((characterData) => {
    console.log(characterData);
    renderCharacters(characterData)
  })
  responseData()

  const responseSinglePage = (e) => { 
  
     const cardId = e.target.closest('.card').id;
      console.log(cardId);
      getSingleCharacter(cardId)
        .then((singlePage) => {
        console.log(singlePage);
        renderSinglePage(singlePage);

     })
     
   }

   const backHome = () => {
    console.log('kl');
    document.querySelector('.char-modal')
  }
  console.log(document.querySelector('.char-modal'));
   


    singlePage.addEventListener('click', responseSinglePage);
    back.addEventListener('click', backHome)
    
    // card.addEventListener('click', enlargeImg )