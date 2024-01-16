import HomePage from "../pages/home";
import MenuPage from "../pages/menu";
import ContactPage from "../pages/contact";

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
  const currentPage = document.querySelector(".page");
  if (currentPage) {
    currentPage.remove();
  }

  const contents = document.querySelector("#content");
  const newPage = determineRoute(path);
  contents.appendChild(newPage);
}

export default Router;
