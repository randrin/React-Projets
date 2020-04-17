import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleEditItem, handleDeleteItem } = this.props;
    return (
      <div className="item-container">
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <div className="row">
            <div className="col-md-10 text-left">
              <span className="item-title">{title}</span>
            </div>
            <div className="col-md-2 text-right">
              <div className="item-actions">
                <span className="mx-2 text-success" onClick={handleEditItem}>
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="mx-2 text-danger" onClick={handleDeleteItem}>
                  <i className="fa fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
