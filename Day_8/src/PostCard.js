import { useParams } from 'react-router-dom';
import usePosts from './utils/usePosts';

const PostCard = () => {
    const { id } = useParams()
    
    const post = usePosts(id);

    return (
        <>
            <div className='post-card-detail'>
                <h2 className='post-title-detail'>{post?.title}</h2>
                <p className='post-body-detail'>{post?.body}</p>
            </div>
        </>
    );
}

export default PostCard;