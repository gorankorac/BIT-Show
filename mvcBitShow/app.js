(function(data, ui) {

  const searchInput = document.querySelector('.browse')
  const singlePage = document.querySelector('.container')
  const singleDropDown = document.querySelector('.dropdown');
  const bitShow = document.querySelector('#back');

  const finaldata = data.getFetchData()
    .then(function(fetchedData50) {
    console.log(fetchedData50);
   
   ui.renderHomePage (fetchedData50)
 });
  
  const onSearch = (e) => {
    const term = e.target.value;
    data.searchShow(term).then((shows) => {
      console.log(shows);
      ui.clearDropdown();
      ui.renderSearchDropdown(shows);
    })
  }

  const onSingleTvShowClick = (e) => {
      const cardId = e.target.closest('.card').id
      console.log(cardId);
      data.getSingleShow(cardId).then((show) => {
        console.log(show);
        ui.renderSinglePage(show)
      })
    }

    const setDropdown = (e) => {
      const id = e.target.getAttribute('id')
      ui.clearDropdown();
      data.getSingleShow(id).then((show) => {
        ui.renderSinglePage(show)
      })
    }
    const backHome = () => {
        data.getFetchData().then((fetchedData) => {
          console.log();
          ui.renderHomePage(fetchedData)
        })
        console.log(data.getFetchData());

    }
  
  searchInput.addEventListener('keyup', onSearch);
  searchInput.addEventListener('blur', ui.clearDropDown);
  searchInput.addEventListener('click', ui.clearDropdown)
  singlePage.addEventListener('click', onSingleTvShowClick);
  singleDropDown.addEventListener('click', setDropdown);
  bitShow.addEventListener('click', backHome)
})(dataModule, uiModule);