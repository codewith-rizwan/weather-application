const DisplayWeather = ({ data }) => {
  if (!data || !data.weather || data.cod === "404") {
    return <div className="error-message">No weather data found</div>;
  }
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {
        <>
          <div className="maincard">
            <span className="cardtitle">{data.name}</span>
            <h1>
              {data.main.temp} <sup>o</sup>
            </h1>
            <span className="weather-main"> {data.weather[0].main}</span>
            {data && data.weather && (
              <img className="weather-icon" src={iconurl} />
            )}
            <span className="weather-description">
              {data.weather[0].description}
            </span>
          </div>
        </>
      }
    </div>
  );
};

export default DisplayWeather;
