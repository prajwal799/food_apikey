import Navbar from "./navigation.js";

const navbar = Navbar();
const container = document.getElementById('nav');
container.innerHTML = navbar;

const input = document.getElementById('search').value;
const btn = document.getElementById('btn');

btn.addEventListener("click",search);

async function search(){
  const input = document.getElementById('search').value;
   const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

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