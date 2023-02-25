'use script'

class Character {
  constructor (id, name, image, status, species, gender, origin)
 {  
    this.id = id;
    this.name = name;
    this.image = image
    this.status = status;
    this.species = species;
    
    this.gender = gender;
    this.origin = origin;

}
}

export const getCharacters = () => {
    return fetch ('https://rickandmortyapi.com/api/character')
      .then((response) => { return response.json()})
      .then((characterData) => {
        console.log(characterData.results);
        let rawObj = characterData.results;
        return rawObj.map(({id, name, image}) => new Character(id, name, image))
        // return rawObj
        // return new Character (characterData.id, characterData.name, characterData.status, characterData.species, characterData.gender, characterData.origin)
      })
    }
    console.log(getCharacters());

    export const getSingleCharacter = (id) => {
      return fetch (`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((singlePage) => {
        console.log(singlePage);
        return new Character (singlePage.id, singlePage.name, singlePage.image, singlePage.status, singlePage.species, singlePage.gender, singlePage.origin)
      })
    }
      // getSingleCharacter()