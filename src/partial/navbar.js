function Navbar() {
  const navLinks = [
    { name: "Home", to: () => {} },
    { name: "Menu", to: () => {} },
    { name: "Contact", to: () => {} },
  ];

  const navbar = document.createElement("div");
  const logo = document.createElement("h1");
  logo.textContent = "Restaraunt";

  const navList = document.createElement("div");
  navList.classList.add("links")

  navLinks.forEach((navLink) => {
    const link = document.createElement("button");
    link.textContent = navLink.name;
    link.addEventListener("click", navLink.to);
    navList.appendChild(link);
  });

  navbar.appendChild(logo);
  navbar.appendChild(navList);
  navbar.classList.add("navbar");

  return navbar;
}

export default Navbar;
