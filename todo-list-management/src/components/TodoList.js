import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const {
      items,
      handleEditItem,
      handleDeleteItem,
      handleClearItems,
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <ul className="list-group my-5">
              <h3 className="text-capitalize">Total List</h3>
              {items.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    title={item.title}
                    handleEditItem={() => handleEditItem(item.id)}
                    handleDeleteItem={() => handleDeleteItem(item.id)}
                  />
                );
              })}
              <button
                type="button"
                className="btn btn-danger btn-block text-capitalize"
                onClick={handleClearItems}
              >
                <i className="fa fa-remove"></i> Remore all Items
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
