function PageLayout() {
  const container = document.createElement("div");
  container.classList.add("container");

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("innerContainer");

  container.appendChild(innerContainer);

  return { container, innerContainer };
}

export default PageLayout;
