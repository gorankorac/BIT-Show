
const url = "http://api.tvmaze.com/shows"

const fetchData = fetch (url)
.then(x => x.json())
.then(data => {
  const top50 = data.slice(0, 50)
  console.log(top50);
  const convertedTop50 = top50.map(e => conv(e))
  return convertedTop50;
  console.log(convertedTop50);
  //  console.log(data);
  // console.log(data[0]);
  // const obj = conv(data[0])
});

console.log(fetchData);

fetchData.then(function(data) {
  console.log(data);
    
  
  // console.log(obj);
  
}) 

function conv(obj){
  
  return {
    name: obj.name,
    image:obj.image.medium,
    id: obj.id
  }

}
 
function pot (obj) {
  return new Movie(obj.name, obj.image, obj.id)
}

const url = "http://api.tvmaze.com/shows"

const fetchData = fetch (url)
.then(x => x.json())
.then(data => {
  console.log(data);
  console.log(data[0]);
  const obj = conv(data[0])
  console.log(obj);
});

console.log(fetchData);


fetchData.then(function(data) {
  console.log(data);  
}) 

const top50 = data.slice(0, 50)
console.log(top50);
const convertedTop50 = top50.map(e => conv(e))
// return convertedTop50;
console.log(convertedTop50);

function conv(obj){
  
  return {
    name: obj.name,
    image:obj.image.medium,
    id: obj.id
  }

}
 
function pot (obj) {
  return new Movie(obj.name, obj.image, obj.id)
}

// ui part

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