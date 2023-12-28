// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./about.jsx";

// Can write the function/components inside the file itself, instead of creating a another file but this is not considered as a good practice. Always for fast refresh move your component to a separate file
function Product() {
  return (
    <>
      <h1>Product Section</h1>
      <h3>Diversity of Product helps you pick the right one for you !!</h3>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    <About />
    <Product />
  </>
);
