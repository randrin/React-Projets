import React, { Component } from "react";
class Components extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Nzeukang Randrin"
        },
        {
          name: "Takou Vanessa"
        },
        {
          name: "Nzeukang Takou Junior"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <First />
        <br/>
        <ul>
          { this.state.data.map((item) => <Member member = {item}/>)}
        </ul>
      </div>
    );
  }
}

class First extends React.Component {
  render() {
    return (
      <div>
        <h2>Family Members</h2>
      </div>
    );
  }
}

class Member extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.member.name}</li>
      </div>
    );
  }
}
export default Components;
