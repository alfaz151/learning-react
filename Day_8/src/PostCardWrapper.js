import { useParams } from "react-router-dom";
import PostCard from "./PostCardClassComp";

const PostCardWrapper = (props) => {
  const { id } = useParams();        // get :id from URL
  return <PostCard {...props} id={id} />;  // pass id as prop
};

export default PostCardWrapper;
