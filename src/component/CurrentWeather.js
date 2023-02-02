import React, { useState } from 'react';
const api = {
    key: "c6f0a0bada9354531b46c50f2f7a02bc",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  function CurrentWeather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  
    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
  
    function convertEpoch(value, timeoffset) {
      if (!value) {
        return ''
      }
  
      let dateObj = new Date(parseInt(value+timeoffset) * 1000);
      let hours = dateObj.getUTCHours();
      let minutes = dateObj.getUTCMinutes();
      let seconds = dateObj.getSeconds();
  
      let timeString = hours.toString().padStart(2, '0') + ':' + 
      minutes.toString().padStart(2, '0') + ':' + 
      seconds.toString().padStart(2, '0');
  
      return timeString
    
      }
  
    return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main className={(typeof weather.rain != "undefined") ? 'weather rain' : "weather"}>
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                {weather.weather[0].main}</div>
            </div>
  
            <div className="weather-info">
              <div className="feelsLike"> Feels Like <span>
                {Math.round(weather.main.feels_like)}°c
                </span>
              </div>
              <div className="humidity">Humidity <span>{weather.main.humidity}</span></div>
              <div className="wind">Wind Speed <span>{weather.wind.speed}</span> at <span>{weather.wind.deg}°</span></div>
            </div>
  
            <div className="sun-timings">
              <div className="sunrise"> Sunrise: 
                {convertEpoch(weather.sys.sunrise ,weather.timezone)}
              </div>
              <div className="sunset">Sunset: {convertEpoch(weather.sys.sunset,weather.timezone)}</div>
            </div>
  
          </div>
          ) : ('')}
        </main>
      </div>
    );
  }
  
  export default CurrentWeather;
  