import React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1> is this custome app </h1>;
}

// createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <MyApp />
//   </>,
// );

// we can also render the one function like
// createRoot(document.getElementById("root")).render(
//  MyApp()
// );



const name = "dharm";
const anotherElement = (
  <>
    <a href="https://www.google.com/" target="_blank">
      visit google
    </a>
    <h1>hello i am {name}</h1>
  </>
  // it is a react object
);

// ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

const reactObject = React.createElement(
  "a",
  {
    href: "https://www.google.com/",
    target: "_blank",
  },
  "click me to go to google",
  name,
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   reactObject
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  {reactObject}
  <App/>
  {anotherElement}
  {MyApp()}
  </>

// for multiple object render
);
