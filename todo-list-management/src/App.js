import React, { Component } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import {v4 as uuid} from "uuid";

export class App extends Component {
  state = {
    items: [],
    item: "",
    title: "",
    id: uuid(),
    editItem: false,
  };

  handleChangeItem = (id) => {
    console.log("handleChangeItem");
  };

  handleEditItem = (id) => {
    console.log("handleEditItem");
  };

  handleSubmitItem = (id) => {
    console.log("handleSubmitItem");
  };

  handleClearItems = (id) => {
    console.log("handleClearItems");
  };

  handleDeleteItem = (id) => {
    console.log("handleDeleteItem");
  };
  render() {
    return (
      <div className="App">
        <h1>Todo List Management</h1>
        <TodoInput
          item={this.state.item}
          handleChangeItem={this.handleChangeItem}
          handleSubmitItem={this.handleSubmitItem}
          editItem={this.state.editItem}
        />
        <TodoList
          items={this.state.items}
          handleEditItem={this.handleEditItem}
          handleDeleteItem={this.handleDeleteItem}
          handleClearItems={this.handleClearItems}
        />
      </div>
    );
  }
}

export default App;
