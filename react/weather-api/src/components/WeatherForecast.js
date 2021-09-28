import React from 'react';

import { useWeather } from '../context/WeatherContext';

function WeatherForecast() {

  const { weather } = useWeather();
  let realDateTime = '';
  
  if (weather !== null) {
    realDateTime = weather.data[0].datetime;
  }

  const convertDate = (daytime) => {

    const arr = daytime.split("-");

    let currentDate = new Date(arr[0], arr[1]-1, arr[2]);

    let currentDay = currentDate.getDay();

    let currentDayName;

    switch (currentDay) {
      case 0:
        currentDayName = "Sun"
        break;
      case 1:
        currentDayName = "Mon"
        break;
      case 2:
        currentDayName = "Tue"
        break;
      case 3:
        currentDayName = "Wed"
        break;
      case 4:
        currentDayName = "Thu"
        break;
      case 5:
        currentDayName = "Fri"
        break;
      case 6:
        currentDayName = "Sat"
        break;
      default:
        currentDayName = "Not found!"
    }

    return currentDayName;
  }

  return (
    <div className="d-flex">
      { 
        weather && weather.data.map((day, index) => {
          return (

            <div className={`card d-flex flex-column align-items-center justify-content-center ${realDateTime === day.datetime ? 'border bg-light' : 'border-0'}`} style={{ width: '200px', height: '200px' }} key={index}>

              <h6 className="card-subtitle">{convertDate(day.datetime)}</h6>
              <img src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`} alt={day.weather.description} style={{ height: '50px', width: '50px' }} />

              <div className="temperatures d-flex">
                <h6 className="me-2" >{day.max_temp}°C</h6>
                <h6 style={{ color: 'gray' }}>{day.min_temp}°C</h6>
              </div>

            </div>

          )

        })
        
      }

    </div>
  )
}


export default WeatherForecast;
