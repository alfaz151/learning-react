import { Component } from "react";
import { MOCK_JSON_DATA } from '../constant';
import { useParams } from 'react-router-dom';

class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: {}
        }
    }

    render() {
        return (
            <>
                <div className='post-card-detail'>
                    <h2 className='post-title-detail'>{this.state.postData?.title}</h2>
                    <p className='post-body-detail'>{this.state.postData?.body}</p>
                </div>
            </>
        );
    }

    componentDidMount() {
        console.log(this.props.id)
        const post = MOCK_JSON_DATA.find((post) => post.id === parseInt(this.props.id));
        this.setState({
            postData: post
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate call after component every rerender");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount call when component destroy");
    }
}

export default PostCard