import Navbar from "./partials/Navbar";
import Router from "./utils/Router";
import Footer from "./partials/Footer";
import "./style.css";

const content = document.querySelector("#content");

content.appendChild(Navbar());
Router();
content.appendChild(Footer());
