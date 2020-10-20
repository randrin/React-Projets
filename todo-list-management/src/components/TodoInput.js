import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChangeItem, handleSubmitItem, editItem } = this.props;
    return (
      <form onSubmit={handleSubmitItem}>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                onChange={handleChangeItem}
                value={item}
                placeholder="Add an item"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-10">
              <button
                type="submit"
                disabled={item ? false : true}
                className="btn btn-block btn-primary"
              >
                <i className="fa fa-check"></i>
                {editItem ? "Edit Item" : "Add Item"}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
