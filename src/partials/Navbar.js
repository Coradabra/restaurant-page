import configElement from "../components/configElement";
import Router from "../utils/Router";
import styles from "./Navbar.module.css";

function Navbar() {
  const navLinks = [
    { name: "Home", to: () => Router("HOME"), active: true },
    { name: "Menu", to: () => Router("MENU") },
    { name: "Contact", to: () => Router("CONTACT") },
  ];

  function highlightLinks(activeLink) {
    const links = [...document.querySelectorAll(`.${styles.links} button`)];
    links.forEach((link) => link.classList.remove(styles.active));
    activeLink.classList.add(styles.active);
  }

  const LOGO = "MyEats";

  const navbar = configElement("div", "", styles.navbar);
  const container = document.createElement("div");
  const logo = configElement("h1", LOGO);
  const navList = configElement("div", "", styles.links);

  navLinks.forEach((navLink) => {
    const link = configElement("button", navLink.name);
    link.addEventListener("click", () => {
      navLink.to();
      highlightLinks(link);
    });
    if (navLink.active) {
      link.classList.add(styles.active);
    }
    navList.appendChild(link);
  });

  container.appendChild(logo);
  container.appendChild(navList);
  navbar.appendChild(container);

  return navbar;
}

export default Navbar;
