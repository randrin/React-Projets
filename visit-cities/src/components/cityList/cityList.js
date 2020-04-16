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
    const sortedCities = this.state.cities.filter((city) => id != city.id);
    this.setState({ cities: sortedCities });
  };
  render() {
    const { cities } = this.state;
    return (
      <section className="container">
        <h2>List Cities to visit</h2>
        {cities.length > 0 ? (
          <>
            {cities.map((city) => (
              <City key={city.id} city={city} removeCity={this.removeCity} />
            ))}
          </>
        ) : (
          <div className="container">
            <div className="row text-center no-city">
              <i className="fa fa-frown-o no-city-icon"></i>
              <span className="no-city-text">No avalaible city to visit now. Try later ...</span>
            </div>
          </div>
        )}
      </section>
    );
  }
}
