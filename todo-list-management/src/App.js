import React, { Component } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { v4 as uuid } from "uuid";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      item: "",
      title: "",
      id: uuid(),
      editItem: false,
    };
  }

  handleChangeItem = (e) => {
    this.setState({ item: e.target.value });
  };

  handleEditItem = (id) => {
    const updateItems = this.state.items.filter((item) => item.id !== id);
    const editItem = this.state.items.find((item) => id === item.id);
    this.setState({
      items: updateItems,
      item: editItem.title,
      editItem: true,
      id: id,
    });
  };

  handleSubmitItem = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: this.state.id,
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      title: "",
      id: uuid(),
      editItem: false,
    });
  };

  handleClearItems = () => {
    this.setState({
      items: [],
    });
  };

  handleDeleteItem = (id) => {
    const updateItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: updateItems,
    });
  };

  render() {
    const { item, items } = this.state;
    return (
      <div className="App my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>Todo List Management</h1>
            </div>
          </div>
        </div>

        <TodoInput
          item={item}
          handleChangeItem={this.handleChangeItem}
          handleSubmitItem={this.handleSubmitItem}
          editItem={this.state.editItem}
        />
        <TodoList
          items={items}
          handleEditItem={this.handleEditItem}
          handleDeleteItem={this.handleDeleteItem}
          handleClearItems={this.handleClearItems}
        />
      </div>
    );
  }
}

export default App;
