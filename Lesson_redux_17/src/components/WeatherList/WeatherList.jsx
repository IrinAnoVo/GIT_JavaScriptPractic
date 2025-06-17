/*
Условия задания:
Создай компонент WeatherCard, который принимает через props:
city — название города (строка),
temperature — температура в градусах (число).
Внутри компонента определи статус погоды на основе температуры:
Если температура больше 30°C → 🔥 Очень жарко
Если температура меньше 0°C → ❄️ Очень холодно
Иначе → 🌤️ Нормальная погода
Выведи:
Название города
Температуру
Статус погоды (на основе условий выше)
Используй компонент WeatherCard несколько раз в App.js (или App.jsx) с разными данными (например, для Пекин, Еревана, Берлина и т.д.)
*/

import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'

const WeatherList = ({weatherData}) => {
  return (
    <div className='weather-list'>
        {
            weatherData && weatherData.map((weather, index) => (
                <WeatherCard 
                    key={index}
                    city={weather.city}
                    temperature={weather.temperature}
                />
            ))
        }
    </div>
  )
}

export default WeatherList