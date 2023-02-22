
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





























// data.forEach((element, index, array) => {
//   console.log(element); // 100, 200, 300
//   console.log(index); // 0, 1, 2
//   console.log(array); // same myArray object 3 times

// }));




