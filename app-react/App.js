import React, { Component } from "react";
class App extends Component {
  render() {
    var myStyle = {  
        fontSize: 80,  
        fontFamily: 'Courier',  
        color: '#003300'  
     } 
     let i = 5;
    return (
      <div>
        <h1>JavaTpoint</h1>
        <h2>Training Institutes</h2>
        <p style={myStyle}>This website contains the best CS tutorials.</p>
        <h1>{i == 1 ? 'True!' : 'False!'}</h1>  
      </div>  
    );
  }
}
export default App;
