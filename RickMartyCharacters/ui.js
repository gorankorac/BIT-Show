const hub = document.querySelector('.container')
const card = document.querySelector('.card')

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

export const renderSinglePage = (singlePage) => {
  
    // Set image size to 1.5 times original
    // card.style.transform = "scale(1.5)";
    // Animation effect
    // card.style.transition = "transform 0.25s ease";

  const html =  `
  
  <div class="char-modal" id="${singlePage.id}"><div><img src=${singlePage.image} class="card-img-top" alt=""></div><div class="list p-2">
    <h3>${singlePage.name}</h3>
    <p>Status: ${singlePage.status}</p>
    <p>Species: ${singlePage.species}</p>
    <p>Gender: ${singlePage.gender}</p>
    <p>Origin: ${singlePage.origin.name}</p>
  </div>
  </div>

  `
  document.querySelector('body').innerHTML += html;
  
  console.log(singlePage);
}

//   <div class="card border-warning mb-5  " style="transform: scale(0.5)" style="transition: 0.25s ease" id="${singlePage.id}">
//   <img src=${singlePage.image} class="card-img-top" alt="..."/>
//   <div class="card-body">
//    <h5 class="card-title text-center">${singlePage.name}</h5>
//    <button type="button" class="btn btn-outline-primary w-100">Like</button>
//  </div>
// </div>