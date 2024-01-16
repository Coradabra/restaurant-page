import Router from "../utils/router";

function Navbar() {
  const navLinks = [
    { name: "Home", to: () => Router("HOME") },
    { name: "Menu", to: () => Router("MENU") },
    { name: "Contact", to: () => Router("CONTACT") },
  ];

  const LOGO = "Restaraunt";

  const navbar = document.createElement("div");
  const container = document.createElement("div");
  const logo = document.createElement("h1");
  logo.textContent = LOGO;

  const navList = document.createElement("div");
  navList.classList.add("links");

  navLinks.forEach((navLink) => {
    const link = document.createElement("button");
    link.textContent = navLink.name;
    link.addEventListener("click", navLink.to);
    navList.appendChild(link);
  });

  container.appendChild(logo);
  container.appendChild(navList);
  navbar.appendChild(container);
  navbar.classList.add("navbar");

  return navbar;
}

export default Navbar;
