import React, { Component } from "react";
import "./cityList.scss";
import City from "../city/city";
import { tourData } from "./../../tourData";

export default class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: tourData,
    };
  }

  removeCity = (id) => {
    console.log("city id: ", id);
  };
  render() {
    const { cities } = this.state;
    return (
      <section className="container">
        <h2>List Cities visit</h2>
        {cities.map((city) => (
          <City key={city.id} city={city} removeCity={this.removeCity} />
        ))}
      </section>
    );
  }
}
