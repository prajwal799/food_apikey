import Navbar from "./navigation.js";

const navbar = Navbar();
const container = document.getElementById("nav");
container.innerHTML = navbar;


async function random(){
     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  
     const list = await data.json();
  
     const meal = await list.meals;
     console.log(meal,"melas")
     
     const recipes = document.getElementById("recipes");
     for(let userData of meal){
       const div = document.createElement("div");
       const h1 = document.createElement("h1");
       h1.textContent = userData.strMeal;
  
       const img = document.createElement('img');
       img.src = userData.strMealThumb;
       img.style.width = "200px";
       img.style.height = "200px";

       const p =document.createElement('p');
       p.textContent = userData.strInstructions;
  
       div.append(h1,img,p);
        recipes.append(div);
    }
    
      
  }

random()
