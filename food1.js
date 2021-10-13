
import {Navbar,getdata,fetchdata} from "./navigation.js";

const navbar = Navbar();
const container = document.getElementById('nav');
container.innerHTML = navbar;



function search(){
    const data = document.getElementById("recipes");
    const input = document.getElementById("search").value;
 let listData = getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
 listData.then ((res) => {
     fetchdata(res,data);
 })
}

const btn =document.getElementById('btn');
btn.addEventListener('click',search);


