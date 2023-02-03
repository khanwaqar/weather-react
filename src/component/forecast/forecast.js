import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
    <label className="title">Daily</label>
    <div className="dailyItems">
    {data.list.splice(0, 7).map((item, idx) => (
      
    //   <article class="box weather">
    //   <div class="icon bubble black">
    //     <div class="spin">
    //       {/* <img src="https://dl.dropbox.com/s/0qq5anxliaopt8d/sun.png" /> */}
    //       <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
    //     </div>
    //   </div>
      
    //   <h1>{forecastDays[idx]}</h1>
    //   <span class="temp">{Math.round(item.main.temp_max)}&deg;C</span>
    //   <span class="high-low">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</span>
    // </article>
      
    <div className={`weather ${(forecastDays[idx]).toLowerCase()}`}>
      <div className="top">
      <div>
          <p className="city">{forecastDays[idx]}</p>
          <p className="weather-description">{item.weather[0].description}</p>
      </div>
      <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
      </div>
      <div className="bottom">
      <p className="temperature">{Math.round(item.main.temp_max)}°C</p>
      <div className="details">
          <div className="parameter-row"><span className="parameter-label">Details</span></div>
          <div className="parameter-row"><span className="parameter-label">Feels like</span><span className="parameter-value">{item.main.feels_like}°C</span></div>
          <div className="parameter-row"><span className="parameter-label">Wind</span><span className="parameter-value">{item.wind.speed} m/s</span></div>
          <div className="parameter-row"><span className="parameter-label">Humidity</span><span className="parameter-value">{item.main.humidity}</span></div>
          <div className="parameter-row"><span className="parameter-label">Pressure</span><span className="parameter-value">{item.main.pressure}</span></div>
      </div>
      </div>
      </div>


    ))}
      </div>
    
      {/* <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
    </>
  );
};

export default Forecast;
