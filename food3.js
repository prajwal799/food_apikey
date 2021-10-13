import {Navbar , getdata , fetchdata} from "./navigation.js";

const navbar = Navbar();
const container = document.getElementById("nav");
container.innerHTML = navbar;

const data = document.getElementById("recipes");
let listData = getdata(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
listData.then((res) => {
    fetchdata(res , data);
})