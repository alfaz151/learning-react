import { useEffect, useState } from 'react';
import { MOCK_JSON_DATA } from '../constant';
import { useParams } from 'react-router-dom';

const PostCard = () => {
    const { id } = useParams()
    
    const [postData, setPostData] = useState({})
    
    useEffect(() => {
        const post = MOCK_JSON_DATA.find((post) => post.id === parseInt(id));
        setPostData(post);
    }, []);

    return (
        <>
            <div className='post-card-detail'>
                <h2 className='post-title-detail'>{postData?.title}</h2>
                <p className='post-body-detail'>{postData?.body}</p>
            </div>
        </>
    );
}

export default PostCard;