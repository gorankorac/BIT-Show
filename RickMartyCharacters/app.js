import { getCharacters } from "./data.js";
import { renderCharacters } from "./ui.js";

const responseData = () => getCharacters()
  .then ((characterData) => {
    console.log(characterData);
    renderCharacters(characterData)
  })
  responseData()