import React from "react";
import mystyle from './mystyle.module.css';
import myStyleSass from './_variables.scss';

class FormRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uername: "",
      age: null,
      errormessage: "",
      description: "The content of a textarea goes in the value attribute",
      mySelected: "Select one option"
    };
  }
  formSubmit = event => {
    event.preventDefault();
    alert("Processing submit .... " + this.state.username);
  };
  changeUsername = event => {
    let name = event.target.name;
    let value = event.target.value;
    let error = "";
    if (name === "age") {
      if (value !== "" && !Number(value)) {
        error = (
          <strong className="error">Invalid age, Must be a number</strong>
        );
      }
    }
    this.setState({ errormessage: error });
    this.setState({ [name]: value });
  };
  render() {
    let header = "";
    if (this.state.username) {
      header = (
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
      );
    }
    return (
      <form onSubmit={this.formSubmit}>
        {header}
        <p className={mystyle.myStyle}>Enter your name:</p>
        <input type="text" name="username" onChange={this.changeUsername} />
        <br />
        <p className={mystyle.myStyle}>Enter your age:</p>
        <input type="text" name="age" onChange={this.changeUsername} />
        <br />
        {this.state.errormessage}
        <br />
        <textarea value={this.state.description} rows="10" cols="50" />
        <br />
        <select value={this.state.mySelected}>
          <option value="">{this.state.mySelected}</option>
          <option value="Car">Car</option>
          <option value="Home">Home</option>
          <option value="Vehicule">Vehicule</option>
        </select>
        <br />
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}

export default FormRegistration;
