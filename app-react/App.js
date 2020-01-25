import React, { Component } from "react";
import Components from "./Components";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("Components this", this);
    this.state = { displayBlog: true, name: "JavaTpoint ReactJS" };
    this.toggleDisplayBlog = this.toggleDisplayBlog.bind(this);
  }

  toggleDisplayBlog() {
    this.setState({ displayBlog: !this.state.displayBlog });
  }
  render() {
    const mystyle = {
      color: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        {this.state.displayBlog ? (
          <div>
            <p>You you like to start the tutorial now?</p>
            <button className="btn btn-primary" onClick={this.toggleDisplayBlog}>Start Now</button>
          </div>
        ) : (
          <div>
            <h4 style={mystyle}>Welcome to the basis ReactJS</h4>
            <Components component={this.state.name} />
            <button className="btn btn-primary" onClick={this.toggleDisplayBlog}>End Tutorial</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
