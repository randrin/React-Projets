import React, { Component } from "react";
import "./cityList.scss";
import City from "../city/city";
import { tourData } from "./../../tourData";
import Empty from "../utils/empty";

export default class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: tourData,
    };
    this.reloadCities = this.reloadCities.bind(this);
  }

  removeCity = (id) => {
    const sortedCities = this.state.cities.filter((city) => id != city.id);
    this.setState({ cities: sortedCities });
  };

  reloadCities() {
    console.log('reloadCities');
    this.setState({ cities: tourData });
  }

  render() {
    const { cities } = this.state;
    return (
      <section className="container">
        {cities.length > 0 ? (
          <>
            <h2>List Cities to visit</h2>
            {cities.map((city) => (
              <City key={city.id} city={city} removeCity={this.removeCity} />
            ))}
          </>
        ) : (
          <Empty reloadCities={this.reloadCities} />
        )}
      </section>
    );
  }
}
