import { getCharacters } from "./data.js";
import { getSingleCharacter } from "./data.js";
import { renderCharacters } from "./ui.js";
import { renderSinglePage } from "./ui.js";

const singlePage = document.querySelector('.container')
const card = document.querySelector('.card')


const responseData = () => getCharacters()
  .then ((characterData) => {
    console.log(characterData);
    renderCharacters(characterData)
  })
  responseData()

  const responseSinglePage = (e) => { 
  
     const cardId = e.target.closest('.card').id
    //  const cardL = e.target.closest('.card').transform(1.5)
    // function enlargeImg(card) {
    //   // Set image size to 1.5 times original
      // card.transform = "scale(1.5)";
  //     // Animation effect
  //     card.style.transition = "transform 0.25s ease";
  //     return card
  // }
  
      console.log(cardId);
      getSingleCharacter(cardId)
        .then((singlePage) => {
        console.log(singlePage);
        renderSinglePage(singlePage);
     })
   }
  // function enlargeImg() {
  //   card.setAttribute('style', 'background-color:red;')
  //  }
   
      


    singlePage.addEventListener('click', responseSinglePage);
    // card.addEventListener('click', enlargeImg )