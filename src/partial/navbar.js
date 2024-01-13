function Navbar() {
  const navLinks = [
    { name: "Home", to: () => {} },
    { name: "Menu", to: () => {} },
    { name: "Contact", to: () => {} },
  ];

  const navbar = document.createElement("div");

  navLinks.forEach((navLink) => {
    const link = document.createElement("button");
    link.textContent = navLink.name;
    link.addEventListener("click", navLink.to);
    navbar.appendChild(link);
  });

  navbar.classList.add("navbar");

  return navbar;
}

export default Navbar;
