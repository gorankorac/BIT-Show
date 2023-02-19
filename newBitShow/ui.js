
const uiModule = (function(){

  const hub = document.querySelector('.container')
  const searchDropdownEl = document.querySelector('.dropdown');
  
  const renderHomePage = (fetchedData50) => {
    let html = `<h1 class='title text-center'>All TV Shows</h1>
                <div class='show-list d-flex flex-wrap '>`
    fetchedData50.forEach((element) => {
      html +=
      ` 
    <div class="card m-xl-3  " style="width: 18rem" id="${element.id}">
  <img
    src=${element.image}
    class="card-img-top"
    alt="..."
  />
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

    
  // const renderHomePage = (name,image,id) => {
  //   const card = document.createElement('div');
  //       card.setAttribute('class', 'card m-xl-4 m-3');
  //       card.style.width = '12rem';
  //   const img = document.createElement('img');
  //       img.setAttribute('src', image );
  //       img.setAttribute('class', 'card-img-top');
  //   const cardBody = document.createElement('div');
  //       cardBody.setAttribute('class', 'card-body');
  //   const title = document.createElement('h4');
  //         title.textContent = name;
  //         title.setAttribute('class', 'card-title text-center');
  //         title.textContent = name;
  //    card.appendChild(img);
  //    cardBody.appendChild(title);
  //    card.appendChild(cardBody);
  //    hub.appendChild(card);
  //    console.log(card);
  //    const html = `
  //    <div class="card m-xl-4 m-3" style="width: 18rem" id="${fdata.id}">
  //    <img
  //      src=${fdata.image}
  //      class="card-img-top"
  //      alt="..."
  //    />
  //    <div class="card-body">
  //      <h5 class="card-title text-center">${fdata.name}</h5>
  //    </div>
  //    </div> `;
  //    console.log(html);
  //    hub.insertAdjacentHTML('beforeend',html);
  // }
//   const final = hub.innerHTML = ` 
//   <div class="card m-xl-4 m-3" style="width: 18rem" id="${finaldata.id}">
//   <img
//     src=${finaldata.image}
//     class="card-img-top"
//     alt="..."
//   />
//   <div class="card-body">
//     <h5 class="card-title text-center">${finaldata.name}</h5>
//   </div>
//   </div> `
//   console.log(final);

//  const j =  finaldata.forEach(element =>  {  ` 
//     <div class="card m-xl-4 m-3" style="width: 18rem" id="${element.id}">
//   <img
//     src=${element.image}
//     class="card-img-top"
//     alt="..."
//   />
//   <div class="card-body">
//     <h5 class="card-title text-center">${element.name}</h5>
//   </div>
//   </div> `  });
  

return {
  renderHomePage,
  renderSearchDropdown,
  clearDropdown 
 }
})();