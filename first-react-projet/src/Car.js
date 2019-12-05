import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="car-header">
        Hi, I am a Car {this.props.brand.model} {this.props.brand.name}!
      </div>
    );
  }
}

export default Car;
