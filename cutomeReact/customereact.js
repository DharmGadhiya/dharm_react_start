function customeRendor(reactElement, container) {
  // const domeElement = document.createElement(reactElement.type)
  // domeElement.innerHTML = reactElement.children
  // domeElement.setAttribute('href' , reactElement.props.herf)
  // domeElement.setAttribute('target' , reactElement.props.target)
  // container.appendChild(domeElement)
  //
  //
  //
  // here we have to assign all the properties manually which is not optimal so we can use for loop

  const domeElement = document.createElement(reactElement.type);

  
  domeElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    }
    domeElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domeElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children:
    'click me to open google || created fake react.jsx and then pushed the new html tag in our index.html file using append.child || inshort all the html things is going to be converted as an object as a key valu paisr and then it will be processed and we can see the display... so here "reactElement" is a object',
};

const mainContainer = document.querySelector("#root");

customeRendor(reactElement, mainContainer);
