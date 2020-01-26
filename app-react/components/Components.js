import React, { Component } from "react";
class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Nzeukang Randrin"
        },
        {
          id: 2,
          name: "Takou Vanessa"
        },
        {
          id: 3,
          name: "Nzeukang Takou Junior"
        }
      ],
      name: this.props.component
    };
  }
  render() {
    return (
      <div>
        <First child={this.state.name}/>
        <br />
        <ul>
          {this.state.data.map(item => (
            <Member key={item.id} member={item} />
          ))}
        </ul>
      </div>
    );
  }
}

class First extends React.Component {
  render() {
    return (
      <div>
        <h2>First {this.props.child} Family Members</h2>
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
