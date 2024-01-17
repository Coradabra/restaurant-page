import configElement from "../components/configElement";
import Card from "../components/Card";
import styles from "./Pages.module.css";

function MenuPage() {
  const MENU = [
    {
      title: "Bulletproof Coffee",
      description:
        "A creammy, focus inducing coffee blended with grass-fed butter, MCT oil, and a picnh of salt.",
      price: 9,
    },
    {
      title: "Scotch Fillet",
      description:
        "Delicious scotch fillet steak cooked to perfection with a delicious red wine jus.",
      price: 50,
    },
    {
      title: "BunFree Burger",
      description:
        "It's just meat and cheese on a plate - taste better then it sounds and you feel better without the bread",
      price: 12,
    },
    {
      title: "Bone Broth",
      description:
        "A broth made of bone. Rather tasty and really good for breaking a fast.",
      price: 10,
    },
    {
      title: "Dark Chocolate",
      description:
        "Tasty pieces of dark chocolate with a hint of a berry flavour.",
      price: 5,
    },
  ];

  const page = configElement("div", "", styles.page);

  const heading = configElement("h3", "MENU");
  page.appendChild(heading);

  MENU.forEach((item) => {
    const card = Card(item.title);
    const container = configElement("div", "", styles["menu-details"]);
    const description = configElement("p", item.description);
    const price = configElement("p", `$${item.price}`);

    container.appendChild(description);
    container.appendChild(price);

    card.appendChild(container);

    page.appendChild(card);
  });

  return page;
}

export default MenuPage;
