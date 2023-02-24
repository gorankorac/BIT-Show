const hub = document.querySelector('.container')

export const renderCharacters = (CharacterData) => {
  let html = `<div class='show-list d-flex flex-wrap justify-content-center pt-5 w-100'>`
  CharacterData.forEach((element) => {
      html +=
    ` 
     <div class="card m-xl-3" style="width: 16rem" id="${element.id}">
       <img src=${element.image} class="card-img-top" alt="..."/>
       <div class="card-body">
        <h5 class="card-title text-center">${element.name}</h5>
        <button type="button" class="btn btn-outline-primary w-100">Like</button>
      </div>
    </div> `;
    
  })
    html += `</div>`
    hub.innerHTML = html;
}