import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  // const APIKEY = '79ae23299fdeba8c712b89f17f7e07e9'

  const weatherData = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=79ae23299fdeba8c712b89f17f7e07e9`
    )
      .then((res) => res.json())
      .then((data) => data);
    setWeather({ data: data });
    console.log(weather.data);
  };
  const handleOnchange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather">
      <span>Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="Enter City Name"
          name="city"
          onChange={(e) => handleOnchange(e)}
        />

        <button className="weather-btn" onClick={(e) => weatherData(e)}>
          {" "}
          Show
        </button>
      </form>
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
