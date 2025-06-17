 //import React, { useEffect, useId, useState } from 'react'
import Greeting from './components/Greeting/Greeting'
import TodoList from './components/TodoList/TodoList';
import UserGreeting from './components/UserGreeting/UserGreeting';
import ProductList from './components/ProductList/ProductList';
import WeatherList from './components/WeatherList/WeatherList';

//const tasks = ["Купить хлеб", "Выучить React", "Сделать зарядку"];

/*
const productsItems = [
  { name: "MacBook", price: 1500 },
  { name: "Наушники", price: 80 },
  { name: "iPhone", price: 1200 }
];
*/

const weatherData = [
  { city: "Ереван", temperature: 35 },
  { city: "Берлин", temperature: 20 },
  { city: "Токио", temperature: 28 },
  { city: "Дубай", temperature: 42 },
  { city: "Нью-Йорк", temperature: 12 },
  { city: "Рейкьявик", temperature: -10 },
];


const App = () => {
  /*
  const [products, setProducts] = useState();

  const isLoggedIn = true;
  const user = { name: "Антон", age: 28 };

  useEffect(() => {
      setTimeout(() => {
        setProducts(productsItems);
      }, 5000);
  }, []);
  */

  return (
    <div>
      {/* <Greeting name="Антон" />

      <TodoList tasks={tasks} />

      <StudentList student="Антон" average={4.8} />

      <UserGreeting isLoggedIn={isLoggedIn} user={user}/> */}

      {/* <ProductList products={products} /> */}

      <WeatherList weatherData={weatherData} />
    </div>
  )
}

export default App