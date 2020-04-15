import React, { Component } from "react";
import "./city.scss";

export default class City extends Component {
  render() {
    const { id, city, img, name, info } = this.props.city;
    const { removeCity } = this.props;
    return (
      <div className="row city-container">
        <div className="col-md-6 img-container">
          <img className="img-city" src={img} title={name} />
          <span className="img-city-remove">
            <i className="fa fa-window-close"></i>
          </span>
        </div>
        <div className="col-md-6">
          <h2 className="city-city">{city}</h2>
          <h3 className="city-name">{name}</h3>
          <div className="city-info">
            <span>Info</span> <i className="fa fa-caret-square-o-down"></i>
            <p>{info}</p>
          </div>
        </div>
      </div>
    );
  }
}
