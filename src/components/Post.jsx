import React, { Component } from 'react'; 

class Post extends Component {
    render(){
        const { post } = this.props;
        return(
        <div>
            <div>{`USER ID: ${post.userId}`}</div>
            <div>{`ID: ${post.id}`}</div>
            <div>{`TITLE: ${post.title}`}</div>
            <div>{`BODY: ${post.body}`}</div>
            <hr />
        </div>
        );
    }
}

export default Post;