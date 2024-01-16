import Navbar from "./partial/navbar";
import Router from "./utils/router";

const content = document.querySelector("#content");

content.appendChild(Navbar());
Router();
