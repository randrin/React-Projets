import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Forms from "./components/Forms";
import LoginConditional from "./components/LoginConditional";
import Reference from "./components/Reference";
import {Route, Link, Switch, BrowserRouter as Router, NavLink} from 'react-router-dom';
import NotFound from "./components/NotFound";
import Animation from "./components/Animations";

const routing = (
    <Router>
        <div>
            <h2>React Js Router</h2>
            <ul>
                <li>
                    <NavLink exact activeStyle={{color: 'red'}} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{color: 'green'}} to="/forms">React Forms</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{color: 'orange'}} to="/login">React Logical Conditional</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{color: 'yellow'}} to="/reference">React References</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{color: 'gray'}} to="/animation">React Animations</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/forms" component={Forms} />
                <Route exact path="/login" component={LoginConditional} />
                <Route exact path="/reference" component={Reference} />
                <Route exact path="/animation" component={Animation} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById("app"));
