import styles from "./Card.module.css";

function Card(heading = "") {
  const card = document.createElement("div");
  card.classList.add(styles.card);

  const headingElement = document.createElement("h5");
  headingElement.textContent = heading;

  card.appendChild(headingElement);
  card.id = heading;

  return card;
}

export default Card;
