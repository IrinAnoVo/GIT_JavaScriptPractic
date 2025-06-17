import React from 'react'
import UserGreeting from './components/UserGreeting/user'
import ProductList from './components/ProductList/productList'
import WeatherCard from './components/WeatherCard/weatherCard'
  
const App = () => {
  const isLoggedIn = true;
  const user = {
    name: 'Мирон',
    age: 24
  };

  const products = [
    { name: "MacBook", price: 1500 },
    { name: "Наушники", price: 80 },
    { name: "iPhone", price: 1200 }
  ];

  
  const weatherData = [
  { city: "Ереван", temperature: 35 },
  { city: "Берлин", temperature: 20 },
  { city: "Токио", temperature: 28 },
  { city: "Дубай", temperature: 42 },
  { city: "Нью-Йорк", temperature: 12 },
  { city: "Рейкьявик", temperature: -10 },
];

  return (
    <>
      <UserGreeting isLoggedIn={isLoggedIn} user={user} />
      <ProductList products={products} />
      {/*
      <WeatherCard city="Ереван" temperature={35} />
      <WeatherCard city="Берлин" temperature={20} />
      <WeatherCard city="Токио" temperature={28} />
      <WeatherCard city="Дубай" temperature={42} />
      <WeatherCard city="Нью-Йорк" temperature={12} />
      <WeatherCard city="Рейкьявик" temperature={-10} />
      */}
      {weatherData && weatherData.map((data, index) => (
        <WeatherCard key={index} city={data.city} temperature={data.temperature} />
      ))}
    </>
  )
}

export default App