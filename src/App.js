import React, { Component } from "react";
import Form from "./Components/Component/Form";
import Info from "./Components/Component/Info";
import Weather from "./Components/Component/Weather";

const API_KEY = "49f74095e8597e05653b643436e3bfba";

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunset: undefined,
    eror: undefined,
  };

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    
    if (city) {
        const api_url = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        cidy: data.name,
        country: data.sys.country,
        sunset: sunset_date,
        error: "",
      });
    }
  };

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
