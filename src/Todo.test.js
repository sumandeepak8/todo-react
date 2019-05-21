import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

it("renders todo without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
