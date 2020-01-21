import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Forms from "./Forms";
import LoginConditional from "./LoginConditional";

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Forms />, document.getElementById("forms"));
ReactDOM.render(<LoginConditional />, document.getElementById("login"));
