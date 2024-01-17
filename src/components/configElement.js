

function configElement(elementType, textContent, className = null) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  if (className) {
    element.classList.add(className);
  }
  return element;
}

export default configElement;
