import Card from "../components/card";

function ContactPage() {
  const page = document.createElement("div");
  page.classList.add("page");

  const heading = document.createElement("h3");
  heading.textContent = "Welcome!";

  const about = Card("About");
  const aboutText = document.createElement("p");
  aboutText.textContent = "Welcome to this restaurant. I love pizza!";
  about.appendChild(aboutText);

  const hours = Card("Hours");

  const location = Card("Location");
  const locationText = document.createElement("p");
  locationText.textContent = "123 Feedme Street, Famished, VIC 3199";
  location.appendChild(locationText);

  page.appendChild(heading);
  page.appendChild(about);
  page.appendChild(hours);
  page.appendChild(location);

  return page;
}

export default ContactPage;
