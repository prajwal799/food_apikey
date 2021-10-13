export function Navbar(){
    return `<div id="nav">
    <ul>
    <li><a href="food1.html">recipes</a></li>
    <li><a href="food2.html">random</a></li>
    <li><a href="food3.html">latest</a></li>
</ul>
    </div>`
}

 


export async function getdata(url){
   const data = await fetch(url)

   const list = await data.json();

   return list.meals;

}
  
 export function fetchdata(d,data) {
    d.forEach(({strMealThumb,strMeal,strCategory,strInstructions}) => {
        let div = document.createElement('div')
        div.classList.add("anotherclass")
         data.innerText = null;
         let img = document.createElement('img');
         img.src = strMealThumb;
         img.style.width = "200px";
         img.style.height = "200px";
        let p = document.createElement('p');
        p.innerText = strMeal;
        let p1 = document.createElement('p');
        p1.innerText = `Category: ${strCategory}`;
        let p2 = document.createElement('p');
        p2.innerText = `Instructions: ${strInstructions}`;
        
         div.append(img,p,p1,p2);
         data.append(div);
    });
}
   
  



export default {Navbar,getdata,fetchdata};