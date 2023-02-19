'use strict'

var dataModule = (function() {
  class Movie {
    constructor(name, id, img, rating) {
      this.name = name;
      this.id = id;
      this.img = img;
      this.rating = rating;
    }
  }

  const getFetchData = fetch('http://api.tvmaze.com/shows')
        .then((response) => response.json())
        .then((fetchedData) => {
          const sliceData50 = fetchedData.slice(0,50);
          const fetchedData50 = sliceData50.map((e) => modifiedData(e))
          
          return fetchedData50; 
        })
        
  const getSearch = fetch('https://api.tvmaze.com/search/shows?q=')
        .then((response) => response.json())
        .then((searchedData) => {
          console.log(searchedData);
          const searchAll = searchedData.map((element) => modifiedData(element))
          console.log(searchAll);
          return searchAll;
        });

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
       
        
  function modifiedData (object) {
    return {
      name: object.name,
      image: object.image.medium,
      id: object.id
    }
  }
    return { 
      getFetchData,
      getSearch,
      searchShow
  }
})();