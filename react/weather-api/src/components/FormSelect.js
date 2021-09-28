import React from 'react';
import Select from 'react-select';

import { useWeather } from '../context/WeatherContext';

function FormSelect() {

    const { setCity } = useWeather();

    const options = [
        { value: 'Istanbul', label: 'Istanbul' },
        { value: 'Ankara', label: 'Ankara' },
        { value: 'Antalya', label: 'Antalya' },
        { value: 'London', label: 'London' },
        { value: 'Paris', label: 'Paris' },
        { value: 'Newyork', label: 'Newyork' },
        { value: 'Tokyo', label: 'Tokyo' },
    ];

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? 'black' : 'blue',
          padding: 20,
        }),
        control: () => ({
          width: 200,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    const onChangeHandler = (item) => {
        setCity(item.value);
    }

    return (
        <Select options={options} value={options.value} onChange={onChangeHandler} placeholder="Select city" styles={customStyles} />
    )
}

export default FormSelect;

