import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }

const API_USER = "https://jsonplaceholder.typicode.com/users"

const UserDetails = () => {
    const { userId } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`${API_USER}/${userId}`)
                const data = await res.json();

                setUser(data);
            } catch (e) {
                console.log(e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers()
    }, []);

    if (loading) {
        return <h2>Loading ...</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>Имя: {user.name}</h2>
            <p>Почта: {user.email}</p>
            <p>Телефон: {user.phone}</p>
            <p>Город: {user.address.city}</p>
            <p>Адрес: {user.address.street}, {user.address.suite}</p>
            <p>Компания: {user.company.name}</p>
            <p>Слоган: {user.company.catchPhrase}</p>
        </div>
    )
}

export default UserDetails