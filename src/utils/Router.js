import HomePage from "../pages/Home";
import MenuPage from "../pages/Menu";
import ContactPage from "../pages/Contact";
import style from "../pages/Pages.module.css";

function determineRoute(path) {
  switch (path) {
    case "HOME":
      return HomePage();
    case "MENU":
      return MenuPage();
    case "CONTACT":
      return ContactPage();
    default:
      return HomePage();
  }
}

function Router(path = "HOME") {
  const currentPage = document.querySelector(`.${style.page}`);
  if (currentPage) {
    currentPage.remove();
  }

  const contents = document.querySelector("#content");
  const newPage = determineRoute(path);
  contents.appendChild(newPage);
}

export default Router;
