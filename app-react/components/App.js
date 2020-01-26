import React, { Component } from "react";
import Components from "./Components";
import styled from 'styled-components';

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
    const Div = styled.div`  
            margin: 20px;  
            border: 5px dashed green;  
            &:hover {  
            background-color: ${(props) => props.hoverColor};  
            }  
            `;
    const Title = styled.h1`  
            font-family: Arial;  
            font-size: 35px;  
            text-align: center;  
            color: palevioletred;  
            `;
    const Paragraph = styled.p`  
            font-size: 25px;  
            text-align: center;  
            background-Color: lightgreen;  
            `;

    return (
      <div>
        <Title>Welcome {this.state.name}</Title>
        {this.state.displayBlog ? (
          <Div hoverColor="Orange">
            <Paragraph>You you like to start the tutorial now?</Paragraph>
            <button className="btn btn-primary" onClick={this.toggleDisplayBlog}>Start Now</button>
          </Div>
        ) : (
          <Div hoverColor="Orange">
            <h4>Welcome to the basis ReactJS</h4>
            <Components component={this.state.name} />
            <button className="btn btn-primary" onClick={this.toggleDisplayBlog}>End Tutorial</button>
          </Div>
        )}
      </div>
    );
  }
}

export default App;
