import React, { Component } from "react";

export default class TodoEmptyList extends Component {
  render() {
    return (
      <div className="my-5">
        <i className="fa fa-frown-o my-4 todo-list-empty-items"></i>
        <h1 className="font-weight-bold">
          Not items available.
        </h1>
        <h3 className="font-weight-bold">
          Try insert another one.
        </h3>
      </div>
    );
  }
}
