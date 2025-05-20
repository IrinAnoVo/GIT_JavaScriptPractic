import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from "./store/features/userSlice"

const App = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  

  if(loading) {
    return 'Loading...';
  }

  return (
    <div>
      {
        data && data.map(item => <h2>{item.name.first}</h2>)
      }
    </div>
  )
}

export default App;