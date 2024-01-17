import configElement from "../components/configElement";
import Card from "../components/Card";
import styles from "./Pages.module.css";

function ContactPage() {
  const page = configElement("div", "", styles.page);

  const heading = configElement("h3", "Contact Us");

  const callMe = Card("Call Me");
  const callMeText = configElement("p", "555-555-555");
  callMe.appendChild(callMeText);

  page.appendChild(heading);
  page.appendChild(callMe);

  return page;
}

export default ContactPage;
