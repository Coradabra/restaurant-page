import configElement from "../components/configElement";
import styles from "./Footer.module.css";

function Footer() {
  const footer = configElement("div", "", styles.footer);
  const footerText = configElement("a", "Project By Cory Bradbury");

  footer.appendChild(footerText);

  return footer;
}

export default Footer;
