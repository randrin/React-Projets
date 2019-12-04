import React from "react";
import ReactDOM from "react-dom";
import Car from "./Car";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Garage",
      techno: "React JS"
    };
  }
  changeTechno = () => {
      this.setState({techno: "React Redux"});
  }
  render() {
    const carInfos = { name: "BMW", model: "Germian" };
    return (
      <div>
        <h1>Who lives in my garage? {this.state.techno}</h1>
        <button type="button" onClick={this.changeTechno}>Change Techno</button>
        <Car brand={carInfos} />
      </div>
    );
  }
}

export default Garage;
