import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard';

const API_USERS = "https://jsonplaceholder.typicode.com/users"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(API_USERS)
                const data = await res.json();

                setUsers(data);
            } catch (e) {
                console.log(e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers()
    }, []);

    if(loading){
        return <h2>Loading ...</h2>
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