import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import Loading from '@components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '@store/features/userSlice';
import { fetchPosts } from '@store/features/postsSlice';

const UserDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { userId } = useParams();

    const [showPost, setShowPost] = useState(false);


    const {user, loading, error} = useSelector(state => state.users)
    const {posts, loading:postsLoading, error:postsError} = useSelector(state => state.posts)

    useEffect(() => {
      dispatch(fetchUserById(userId))
    }, [dispatch, userId])

    useEffect(() => {
     
    }, [userId]);

    const goBack = () => {
        navigate(-1)
    }

    const togglePost = () => {
        if(posts.length === 0){
            dispatch(fetchPosts(userId))
            setShowPost(!showPost)
        }

        setShowPost(!showPost);
    }

    if (loading || !user || postsLoading) {
        return <Loading />
    }

    if (error || postsError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div className='user-details'>
            <button onClick={goBack}>Go Back</button>

            <div className='user-info'>
                <h2>Имя: {user?.name}</h2>
                <p>Почта: {user?.email}</p>
                <p>Телефон: {user?.phone}</p>
                <p>Город: {user?.address.city}</p>
                <p>Адрес: {user?.address.street}, {user?.address.suite}</p>
                <p>Компания: {user?.company.name}</p>
                <p>Слоган: {user?.company.catchPhrase}</p>
            </div>

            <button onClick={togglePost}>{showPost ? "Скрыть" : "Показать посты"}</button>

            <div className='user-posts'>
                {
                    showPost && posts && posts.map(post => (
                        <div key={post.id} className='post-item'>
                            <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserDetails