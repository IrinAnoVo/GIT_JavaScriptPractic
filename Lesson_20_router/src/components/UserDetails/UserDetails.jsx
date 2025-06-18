import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Loading from '@components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '@store/features/userSlice';

const UserDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { userId } = useParams();


    const {user, loading, error} = useSelector(state => state.users)

    useEffect(() => {
      dispatch(fetchUserById(userId))

    }, [dispatch, userId])

    useEffect(() => {
     
    }, [userId]);

    const goBack = () => {
        navigate(-1)
    }

    if (loading || !user) {
        return <Loading />
    }

    if (error) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <button onClick={goBack}>Go Back</button>

            <div>
                <h2>Имя: {user?.name}</h2>
                <p>Почта: {user?.email}</p>
                <p>Телефон: {user?.phone}</p>
                <p>Город: {user?.address.city}</p>
                <p>Адрес: {user?.address.street}, {user?.address.suite}</p>
                <p>Компания: {user?.company.name}</p>
                <p>Слоган: {user?.company.catchPhrase}</p>
            </div>
        </div>
    )
}

export default UserDetails