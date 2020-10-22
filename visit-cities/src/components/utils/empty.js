import React, { Component } from "react";
import "./utils.scss";

export default class Empty extends Component {
  render() {
    const { reloadCities } = this.props;
    return (
      <div className="container empty-wrapper">
        <div className="row text-center">
          <div className="col-md-12 empty-city">
            <i className="fa fa-frown-o empty-city-icon no-city-icon"></i>
            <h2 className="empty-city-text font-weight-bold">
              No avalaible city to visit now.
            </h2>
            <button
              className="btn btn-primary empty-city-cta"
              onClick={reloadCities}
            >
              <i className="fa fa-search"></i> Try Search again
            </button>
          </div>
        </div>
      </div>
    );
  }
}
