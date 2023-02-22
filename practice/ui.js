var xhr = new XMLHttpRequest
var card = document.querySelector('.card-img-top')
var gh = [];
// var photo = function reques

 function request() {

  xhr.open('GET', 'http://api.tvmaze.com/shows', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
          console.log(data);

          var b = data[0].image.medium;
          console.log(b);
          card.setAttribute('src', b)
            
              
    }
  }
   
  xhr.send();

}

 request();


