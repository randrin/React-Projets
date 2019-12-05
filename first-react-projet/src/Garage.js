import React from "react";
import Car from "./Car";
import FormRegistration from "./FormRegistration";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Garage",
      techno: "React JS",
      show: false,
      registration: false
    };
  }
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ techno: "React Native" });
  //     }, 2000);
  //   }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.techno;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.techno;
  }
  changeTechno = (info, event) => {
    this.setState({
      techno: "React Redux",
      show: true,
      registration: true
    });
    alert(event.type);
  };
  render() {
    const carInfos = { name: "BMW", model: "Germian" };
    let showChild, showRegistration;
    if (this.state.show) {
      showChild = <Car brand={carInfos} />;
    }
    if (this.state.registration) {
        showRegistration = <FormRegistration />;
    }
    return (
      <div>
        <h1>Who lives in my garage? {this.state.techno}</h1>
        <button type="button" onClick={this.changeTechno.bind(this, "Good Modification !")}>
          Change Techno
        </button>
        {showRegistration}
        <div id="div1"></div>
        <div id="div2"></div>
        {showChild}
      </div>
    );
  }
}

export default Garage;
