// How React library actually reacts by looking to the tags given into the function,
// let suppose we created one variable called reactElement

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  domElement.setAttribute("Style", "font-size:32px");
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
