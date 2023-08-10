const div=document.getElementById('output-fav');
let name=localStorage.getItem('is_name');

console.log(name);
// Marvel Api url
async function display(){
const url=`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=32792b62c07060de73f51dfce4fb7cf9&hash=654929f48b823454d77fe0bf7ab12796&name=${name}`
    
const result= await fetch(url);
const Webdata = await result.json();
console.log(Webdata)
const ls=document.createElement('div') 
Webdata.data["results"].forEach((user) => {
         
ls.innerHTML=
`<div id="inside">
<img id="img1" src="${user.thumbnail["path"]+'.'+user.thumbnail["extension"]}">
<p id="name-fav">${user.name}</p>
  <button id="del" style="padding:5px;background-color:red ">Remove</button>
  </div>`
  const del = document.getElementById('del');
  
    div.appendChild(ls);
    console.log(ls);
})
del.addEventListener('click',function(){
    div.innerHTML="";
    localStorage.setItem('is_name',"");
  })
}
display();