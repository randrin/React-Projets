import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  render() {
    return <div className="car-header">Hi, I am a Car {this.props.brand.model} {this.props.brand.name}!</div>;
  }
}

export default Car;
