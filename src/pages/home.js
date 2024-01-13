import Card from "../components/card";

function HomePage() {
  const { createElement, createDocumentFragment } = document;

  const fragment = createDocumentFragment();

  const heading = createElement("h3");
  heading.textContent = "Welcome!";

  const about = Card("About");
  const aboutText = createElement("p");
  aboutText.textContent = "Welcome to this restaurant. I love pizza!";
  about.appendChild(aboutText);

  const hours = Card("Hours");

  const location = Card("Location");
  const locationText = createElement("p");
  locationText.textContent = "123 Feedme Street, Famished, VIC 3199";
  location.appendChild(locationText);

  fragment.appendChild(heading);
  fragment.appendChild(about);
  fragment.appendChild(hours);
  fragment.appendChild(location);

  return fragment;
}

export default HomePage;
