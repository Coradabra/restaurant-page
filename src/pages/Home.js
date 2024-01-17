import configElement from "../components/configElement";
import Card from "../components/Card";
import styles from "./Pages.module.css";

function HomePage() {
  const HOURS = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "6am - 4pm" },
    { day: "Wednesday", hours: "6am - 4pm" },
    { day: "Thursday", hours: "6am - 5pm" },
    { day: "Friday", hours: "6am - 5pm" },
    { day: "Saturday", hours: "7am - 3pm" },
    { day: "Sunday", hours: "8am - 2pm" },
  ];

  const page = configElement("div", "", styles.page);

  const heading = configElement("h3", "Welcome!");

  const about = Card("About");
  const aboutText = configElement(
    "p",
    "Welcome to this restaurant. I love pizza!"
  );
  about.appendChild(aboutText);

  const hours = Card("Hours");
  const hoursList = configElement("ul", "", styles.openHours);
  HOURS.forEach((day) => {
    const listItem = configElement("li", day.day);
    const openHours = configElement("span", day.hours);
    listItem.appendChild(openHours);
    hoursList.appendChild(listItem);
  });
  hours.appendChild(hoursList);

  const location = Card("Location");
  const locationText = configElement(
    "p",
    "123 Feedme Street, Famished, VIC 3199"
  );
  location.appendChild(locationText);

  page.appendChild(heading);
  page.appendChild(about);
  page.appendChild(hours);
  page.appendChild(location);

  return page;
}

export default HomePage;
