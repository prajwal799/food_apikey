import Navbar , {fetchdata} from "./navigation.js";

const navbar = Navbar();
const container = document.getElementById('nav');
container.innerHTML = navbar;

const fetchData = fetchdata();
const data = document.getElementById("recipes");
data.innerHTML = fetchData;


