import Navbar from "./partial/navbar";
import HomePage from "./pages/home";

const content = document.querySelector("#content");
const container = document.createElement("div");
container.classList.add("container");
container.appendChild(HomePage());

content.appendChild(Navbar());
content.appendChild(container);
