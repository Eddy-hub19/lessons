import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
      {this.props.country && (
        <div>
        <p>
          Местоположение: {this.props.city}, {this.props.country}
        </p>
        <p> Температура: {this.props.temp} </p>
        <p> Заход Солнца: {this.props.sunset} </p>
        </div>   
      )}
      </div>
    );
  }
}

export default Weather;
