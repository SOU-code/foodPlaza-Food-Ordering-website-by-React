import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Title = () => {
  return (
    <h1 id="title" key="title">
      Namaste React
    </h1>
  );
};

const HeaderComponent = () => {
  return (
    <div>
      <Title/>
      <h2>Namaste React functional component</h2>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
