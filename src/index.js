import Navbar from "./partial/navbar";
import PageLayout from "./partial/pageLayout";
import HomePage from "./pages/home";

const content = document.querySelector("#content");
const { container, innerContainer } = PageLayout();

content.appendChild(Navbar());
content.appendChild(container);

innerContainer.appendChild(HomePage());
