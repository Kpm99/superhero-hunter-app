// Selecting the element from DOM

const div=document.getElementById('output');
let name=localStorage.getItem('is_name');

console.log(name);
// Marvel Api url
async function display(){
const url=`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=32792b62c07060de73f51dfce4fb7cf9&hash=654929f48b823454d77fe0bf7ab12796&name=${name}`
// API call to get the data    
const result= await fetch(url);
const Webdata = await result.json();
console.log(Webdata)
const ls=document.createElement('div') 
// iterating through the data we got from fetching the url 
Webdata.data["results"].forEach((user) => {
 //displaying hero details         
ls.innerHTML=
`<div id="inside">
<img id="img1" src="${user.thumbnail["path"]+'.'+user.thumbnail["extension"]}">
<h2 id="name-fav">Name : ${user.name}</h2>
<h2 id="name-fav">ID : ${user.id}</h2>
  <div id="desc-box">
  <p id="desc">${user.description} </p>
  <h3 id="desc"> Stories : ${user.stories.available} </h3>
  <h3 id="desc">Series : ${user.series.available} </h3>
  <h3 id="desc">Comics : ${user.comics.available} </h3>
  
  </div>
  </div>`
    div.appendChild(ls);
    console.log(ls,"ls");
})
}
display();