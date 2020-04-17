import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>To do List</h2>
        <TodoItem />
      </div>
    );
  }
}
