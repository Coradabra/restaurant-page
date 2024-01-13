import Card from "../components/card";

function HomePage() {
  const pageContents = document.createElement("div");
  pageContents.classList.add("pageContents");

  const heading = document.createElement("h3");
  heading.textContent = "Welcome!";
  pageContents.appendChild(heading);

  const about = Card("About");
  const aboutText = document.createElement("p");
  aboutText.textContent = "Welcome to this restaurant. I love pizza!";
  about.appendChild(aboutText);
  pageContents.appendChild(about);

  const hours = Card("Hours");
  pageContents.appendChild(hours);

  const location = Card("Location");
  const locationText = document.createElement("p");
  locationText.textContent = "123 Feedme Street, Famished, VIC 3199";
  location.appendChild(locationText);
  pageContents.appendChild(location);

  return pageContents;
}

export default HomePage;
