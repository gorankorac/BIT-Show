
const uiModule = (function(){

  const hub = document.querySelector('.container')
  const searchDropdownEl = document.querySelector('.dropdown');
  
  const renderHomePage = (fetchedData50) => {
    let html = `<h1 class='title text-center'>All TV Shows</h1>
                <div class='show-list d-flex flex-wrap '>`
    fetchedData50.forEach((element) => {
      html +=
      ` 
       <div class="card m-xl-4" style="width: 22rem" id="${element.id}">
         <img src=${element.image} class="card-img-top" alt="..."/>
         <div class="card-body">
          <h5 class="card-title text-center">${element.name}</h5>
        </div>
      </div> `;
    })
    html += `</div>`
    hub.innerHTML = html;
  }

  const renderSearchDropdown = (shows) => {
    shows.forEach((show) => {
      const itemEl = document.createElement('div');
      itemEl.setAttribute('id', show.id);
      
      itemEl.classList.add('search-item');
      itemEl.textContent = show.name;
      searchDropdownEl.appendChild(itemEl);
    });
  };

  const clearDropdown = () => {
    searchDropdownEl.innerHTML = '';
  };

  const renderSinglePage = (show) => {
       // Cast
       let castListHtml = '';
       let castCounter = 0;
       show.cast.forEach((string) =>{
         castCounter += 1;
         if (castCounter < 10){
           castListHtml += `
           <li class="cast-item">${string}</li>
           `
         }
       });
       // Seasons
       let seasonList = '';
       let numberOfSeasons = 0;
       show.seasons.forEach(({premiereDate, endDate}) =>{
         numberOfSeasons += 1;
         seasonList += `
         <li class="season-item">${premiereDate} - ${endDate}</li>
         `
       });
       // Crew
      let crewMembers = '';
      let counter = 0;
      show.crew.forEach((string) => {
       counter +=1;
       if (counter < 6){
         crewMembers += `
         <li class="cast-item">${string}</li>
         `
       }
       else {
         return;
       };
      })
      let listOfEpisodes = '';
      show.episodes.forEach((string) =>{
       listOfEpisodes += `<p class="episodes">${string}</p>`
      })
      // Akas
      let listOfAkas = '';
      if (Array.isArray(show.akas === true)){
       show.akas.forEach((string) =>{
         listOfAkas += `<p class="akas">${string}</p>`
        })
      };
     
       const finalHtml = `
        <h1>${show.name}</h1>
          <div class="detail-wrapper d-flex">
            <img src="${show.img}  " alt="show cover" class="single-page-cover"/>
              <ul class="list-wrapper">
                <h2>Seasons(${numberOfSeasons})</h2>
                ${seasonList}
                <h2>Cast</h2>
                ${castListHtml}
                <h2>Crew</h2>
                ${crewMembers}
              </ul>
           </div>
         <div class="show-details">
             <h2>Show Details</h2>
             ${show.summary}
            </br>
         <div class="more">
           
           <div class="akas-list">
             <h2> List of A.K.A.S</h2>
             ${listOfAkas}
           </div>
           <div class="episode-list">
             <h2> Episode List</h2>
             ${listOfEpisodes}
           </div>
         </div>
       </div>
       `;
       hub.innerHTML = finalHtml;
     };
    
return {
  renderHomePage,
  renderSearchDropdown,
  clearDropdown,
  renderSinglePage
 }
})();