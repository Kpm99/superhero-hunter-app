// Selecting the element from DOM

let searchButton=document.getElementById('btn');
let addItem=document.getElementById('form-control');
let list=document.getElementById('list');
let Searchlist=document.getElementById('search-list');
let lp=document.getElementById('list-page');

let name=addItem.value;
 function display(value) {
  console.log(value)
  addItem.value = value;
  
 }

function openInNewTab(url) {
  const win = window.open(url, '_blank');
  win.focus();
}
//adding event-listener to input search field
addItem.addEventListener('keyup',(result = async ()=>{
  if (addItem.value.length < 2) {
    list.innerHTML=""
    return false;
  }
  list.innerHTML=""
// Marvel Api url
  const url=`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=32792b62c07060de73f51dfce4fb7cf9&hash=654929f48b823454d77fe0bf7ab12796&nameStartsWith=${addItem.value}`
   // API call to get the data 
      const result= await fetch(url);
      const Webdata = await result.json();

      console.log(Webdata);
          
          Webdata.data["results"].forEach((user) => {
            const div=document.createElement('div');
            
            
            div.innerHTML=
              //displaying search results
              `<div id="inside-item" onclick="display(user.name)">
              <img id="img2" src="${user.thumbnail["path"]+'.'+user.thumbnail["extension"]}">
              <a id="name1"  href="home.html" >${user.name}</a>
              <button  id="check">Add to Favorites</button>
                </div>`
                
                console.log(div)
                list.appendChild(div);
                const check=document.getElementById('check');
                div.addEventListener('click',function(){
                  addItem.value=user.name;
                  localStorage.setItem('is_name',user.name).value;
                  check.addEventListener('click',function(){
                    localStorage.setItem('is_name',user.name).value;
                  })
                })
                
              
          })  
          
         
          
})
);


