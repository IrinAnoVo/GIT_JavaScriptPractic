import React from 'react'

const WeatherCard = ({ city, temperature }) => {

    const getTemperatureStatus = (temp) => {
        if (temp > 30) {
            return '🔥 Очень жарко';
        } else if (temp < 0) {
            return '❄️ Очень холодно';
        } else {
            return '🌤️ Нормальная погода';
        }
    }

    const weatherStatus = getTemperatureStatus(temperature);

    return (
        <div className='weather-card'>
            <h3>{city}</h3>
            <p>Температура: {temperature}°C</p>
            <p>Состояние: {weatherStatus}</p>
        </div>
    )
}

export default WeatherCard