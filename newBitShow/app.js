(function(data, ui) {

  const searchInput = document.querySelector('.browse')

  const finaldata = data.getFetchData.then(function(fetchedData50) {
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
  
  searchInput.addEventListener('keyup', onSearch);
  searchInput.addEventListener('blur', ui.clearDropDown);
})(dataModule, uiModule);