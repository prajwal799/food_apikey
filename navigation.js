function Navbar(){
    return `<div id="nav">
    <ul>
    <li><a href="food1.html">recipes</a></li>
    <li><a href="food2.html">random</a></li>
    <li><a href="food3.html">latest</a></li>
</ul>
    </div>`
}

 
 export function fetchdata(){
    return `<div id="recipes>
    const input = document.getElementById('search').value;
const btn = document.getElementById('btn');

btn.addEventListener("click",search);
search();

async function search(){
  const input = document.getElementById('search').value;
   const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pizza")

   const list = await data.json();

   const meal = await list.meals;
   const recipes = document.getElementById("recipes");
   recipes.textContent = "";
   for(let userData of meal){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = userData.strMeal;

    const img = document.createElement('img');
    img.src = userData.strMealThumb;
    img.style.width = "200px";
    img.style.height = "200px";

    div.append(h1,img);
    recipes.append(div);
 }    
   
   
}
             </div>`
}



export default Navbar;