import configElement from "../components/configElement";
import Card from "../components/card";

function MenuPage() {
  const MENU = [
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
    { title: "", description: "", price: 0 },
  ];

  const page = configElement("div", "", "page");

  const heading = configElement("h3", "MENU");
  page.appendChild(heading);

  MENU.forEach((item) => {
    const card = Card(item.title);
    const description = configElement("p", item.description);
    const price = configElement("p", `$${item.price}`);

    card.appendChild(description);
    card.appendChild(price);

    page.appendChild(card);
  });

  return page;
}

export default MenuPage;
