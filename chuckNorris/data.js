'use strict'

 class Norris {
      constructor(icon_url, id, value) {
        this.icon_url = icon_url;
        this.id = id;
        this.value = value;
      }
}

export const getChuck = () => {
  return fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {return response.json()})
    .then((chuckData) => {
      console.log(chuckData);
      
       return new Norris (chuckData.icon_url, chuckData.id, chuckData.value)
    })
}



console.log(getChuck());