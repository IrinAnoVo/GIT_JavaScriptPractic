import React, { useEffect } from 'react'
import UserCard from '@components/UserCard/UserCard';
import Loading from '@components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '@store/features/userSlice';

const Users = () => {
    const dispatch = useDispatch();

    const {users, loading, error} = useSelector(state => state.users)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch]);

    if(loading){
        return <Loading />
    }

    if(error){
        return <h2>{error.message}</h2>
    }

    return (
        <div className='users'>
            {
                users && users.map(user => <UserCard key={user.id} user={user} />)
            }
        </div>
    )
}

export default Users