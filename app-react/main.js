import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Forms from "./components/Forms";
import LoginConditional from "./components/LoginConditional";
import Reference from "./components/Reference";

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Forms />, document.getElementById("forms"));
ReactDOM.render(<LoginConditional />, document.getElementById("login"));
ReactDOM.render(<Reference />, document.getElementById("ref"));
