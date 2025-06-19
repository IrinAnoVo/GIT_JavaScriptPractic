import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import Loading from '@components/Loading/Loading';
import { fetchPostById } from '@store/features/postsSlice';
import { fetchCommentsByPostId } from '../../store/features/postsSlice';

const PostDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { postId } = useParams();

    const {post, comments, loading, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPostById(postId))
        dispatch(fetchCommentsByPostId(postId))
    }, [dispatch, postId])

    
    const goBack = () => {
        navigate(-1)
    }

    if (loading || !post) {
        return <Loading />
    }

    if (error) {
        return <h2>{error.message}</h2>
    }
    

    return (
        <div className="postDetail">
            <h2>Заголовок поста: {post.title}</h2>
            <p className="commentText"><span className="bold">Текст поста:</span> {post.body}</p>
            <div className="commentContainer"><span className="bold">Комментарии ({comments.length}):</span>
                {comments && comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <ul>
                            <li>
                                <p>{comment.name}: ({comment.email})</p>
                                <p>{comment.body}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <button onClick={goBack} className="back">Back</button>
        </div>
    )
}

export default PostDetails