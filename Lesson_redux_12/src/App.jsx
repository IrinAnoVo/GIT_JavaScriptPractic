import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, fetchUsers } from './store/features/userSlice';

const App = () => {
  const dispatch = useDispatch();
  // const data = useSelector(state => state.users.data);
  // const loading = useSelector(state => state.users.loading);
  // const error = useSelector(state => state.users.error);

  // const {data, loading} = useSelector(state => state.users);

  const data = useSelector(allUsers);

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

  console.log(data)
  return (
    <div>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default App

