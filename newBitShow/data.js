'use strict'

var dataModule = (function() {
  class Movie {
    constructor(name, id, img, cast, summary, seasons, crew, episodes, akas ) {
      this.name = name;
      this.id = id;
      this.img = img;
      this.summary = summary;
      this.cast = cast;
      this.seasons = seasons;
      this.crew = crew;
      this.episodes = episodes;
      this.akas = akas;
    }
  }

  class Season {
    constructor(premiereDate, endDate) {
      this.premiereDate = premiereDate;
      this.endDate = endDate;
    }
  }

  const getFetchData = () => {
   return fetch('http://api.tvmaze.com/shows')
        .then((response) => response.json())
        .then((fetchedData) => {
          console.log(fetchedData);
          const sliceData50 = fetchedData.slice(0,50);
          const fetchedData50 = sliceData50.map((e) => modifiedData(e))
          
            return fetchedData50; 
        
          }).catch(err => console.log(err))
  }

      const searchShow = (term) => {
          return fetch(`https://api.tvmaze.com/search/shows?q=${term}`)
        .then(function (res) {
              return res.json();
            })
        .then(function (showsRawObjects) {
              return showsRawObjects.map(({ show }) => {
          const { name, id, image } = show;
                console.log(show);
          const imageToUse = image ? image.original : '';
                console.log(showsRawObjects);
                return new Movie(name, id, imageToUse);
              });
            });
             }

      const getSingleShow = (id) => fetch (`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=akas&embed[]=episodes`)
        .then((response) => response.json())
        .then((singleShowInfo) => {
                console.log(singleShowInfo);
          const seasons = singleShowInfo._embedded.seasons.map((e) => new Season(e.premiereDate, e.endDate))
          const cast = singleShowInfo._embedded.cast.map((e) => e.person.name)
                console.log(seasons);
                console.log(cast);
          const crew = singleShowInfo._embedded.crew.map((e) => e.type + ':' + e.person.name)
                console.log(crew);
          const episodeList = singleShowInfo._embedded.episodes.map((e) => e.name + 'Season:' + e.season + 'Episode:' + e.number)

                return new Movie(singleShowInfo.name, singleShowInfo.id, singleShowInfo.image.medium, cast, singleShowInfo.summary, seasons, crew, episodeList);
              })
     
   function modifiedData (object) {
    return {
      name: object.name,
      image: object.image.medium,
      id: object.id
    }
  }
    return { 
      getFetchData,
      searchShow,
      getSingleShow
  }
})();