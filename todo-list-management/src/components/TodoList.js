import React, { Component } from "react";
import TodoEmptyList from "./TodoEmptyList";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const {
      items,
      handleEditItem,
      handleDeleteItem,
      handleClearItems,
    } = this.props;
    const itemList = items.map((item) => {
      return (
        <TodoItem
          key={item.id}
          title={item.title}
          handleEditItem={() => handleEditItem(item.id)}
          handleDeleteItem={() => handleDeleteItem(item.id)}
        />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <ul className="list-group my-5">
              {items.length === 0 ? (
                <TodoEmptyList />
              ) : (
                <>
                  <h3 className="text-capitalize">Total List</h3>
                  {itemList}
                  <button
                    type="button"
                    className="btn btn-danger btn-block text-capitalize"
                    onClick={handleClearItems}
                  >
                    <i className="fa fa-remove"></i> Remove all Items
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
