import React, { Component } from "react";
import "./cityList.scss";
import City from "../city/city";

export default class CityList extends Component {
  render() {
    return (
      <div>
        <h2>List Cities visit</h2>
        <City />
      </div>
    );
  }
}
