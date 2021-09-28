import React from 'react';

import FormSelect from './FormSelect';
import WeatherForecast from './WeatherForecast';

import { useWeather } from '../context/WeatherContext';

function Container() {

    const { city } = useWeather();

    return (
        <div>
            <h1 className="text-center display-3 text-danger">7 Days Weather Forecast</h1>
           <FormSelect></FormSelect>
           <br />
           <WeatherForecast></WeatherForecast>
           <h1 className="text-center display-5">Current city is : {city} </h1>
        </div>
    )
}

export default Container;
