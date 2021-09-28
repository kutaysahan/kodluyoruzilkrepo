import { createContext, useContext,useState,useEffect, useCallback } from "react";

import axios from 'axios';

require('dotenv').config(); // dotenv

const WeatherContext = createContext();

export const WeatherProvider = ({children}) =>{

    const [weather,setWeather] = useState(null);

    const [city,setCity] = useState('');

    const url = 'http://api.weatherbit.io/v2.0/'; // url
    const key = `${process.env.REACT_APP_API_KEY}`;

    
    const  getWeatherForecasts = useCallback(async ()=> {
        
        if(city !== ''){
            
            const response = await axios.get(`${url}forecast/daily?city=${city}&days=8&key=${key}`);

            setWeather(response.data);
        }
        
    },[city,key]);

    useEffect(()=>{

        getWeatherForecasts()

        .catch((e)=> console.log(e))

    },[getWeatherForecasts]);

    const values = {

        weather,
        city,
        setCity
    }

    return <WeatherContext.Provider value = {values}>
        {children}
    </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);