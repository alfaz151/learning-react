import { useState } from "react";
import { MOCK_JSON_DATA } from "../../constant";

const usePosts = (postId) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        const post = MOCK_JSON_DATA.find((post) => post.id === parseInt(id));
        setPost(post);
    }, []);

    return post;
}

export default usePosts