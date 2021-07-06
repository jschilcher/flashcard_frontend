import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app";
import "bootstrap/dist/css/bootstrap.css";

const jsxElement = <h1>App</h1>;
console.log(jsxElement);

ReactDOM.render(<App/>, document.getElementById("root"));