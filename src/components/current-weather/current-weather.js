import './current-weather.css';

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top"></div>
      <p className="city">Belgrade</p>
      <p className="weather-temperature">Sunny</p>
      <img
        alt="weather"
        className="weather-icon"
        src="path_to_weather_icon.png"
      ></img>
    </div>
  );
};

export default CurrentWeather;
