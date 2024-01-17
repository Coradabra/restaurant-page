import configElement from "../components/configElement";
import Card from "../components/Card";
import  styles from "./Pages.module.css";

function ContactPage() {
  const page = configElement("div", "", styles.page);

  const heading = configElement("h3", "Contact Us");

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
