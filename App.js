import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 id="heading" className="head">
    Namaste React with JSX
  </h1>
);

//React Functional Component

const number = 1000;
const HeadingComponent = () => (
  <div className="container">
    <h2>{title}</h2>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
