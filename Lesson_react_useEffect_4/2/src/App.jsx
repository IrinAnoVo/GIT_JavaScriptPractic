import { useState, useEffect } from 'react'
import Loading from './Loading';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const App = () => {
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);  

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      await delay(5000);
      const data = await response.json();

      console.log("Fetching users data...");

      setUsers(data);
    }
    catch (error) {
      console.error('Error fetching users:', error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    fetchUsers();
  }, [count]);

  if(isLoading) {
    return <Loading />
  }

  return (
    <div>
        <button onClick={incrementCount}>Increment</button>
        <h2>{count}</h2>

        <ul>
            {
                users && users.map((user, index) => (
                    <li key={user.id}>
                       {index + 1}. {user.name}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default App