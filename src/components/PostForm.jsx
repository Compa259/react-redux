import React, { Component } from 'react';
import InputElement from './InputElement';
import { connect } from 'react-redux';
import { addPost } from '../js/actions/index';

class PostFormConnected extends Component {

    constructor(props){
        super(props);
        this.state = {
            post: {
                userId: '',
                id: '',
                title: '',
                body: ''
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPost(this.state.post);
    }

    handleChangeUserId = (event) => {
        this.setState({
            post: {...this.state.post, userId: event.target.value}
        })
    }

    handleChangeId = (event) => {
        this.setState({
            post: {...this.state.post, id: event.target.value}
        })
    }

    handleChangeTitle = (event) => {
        this.setState({
            post: {...this.state.post, title: event.target.value}
        })
    }

    handleChangeBody = (event) => {
        this.setState({
            post: {...this.state.post, body: event.target.value}
        })
    }

    render(){
        const { userId, id, title, body } = this.state.post; 
        return(
                <form onSubmit={this.handleSubmit}>
                    <InputElement headerName='UserId: ' handleChange={this.handleChangeUserId} value={userId} />
                    <InputElement headerName='Id: ' handleChange={this.handleChangeId} value={id} />
                    <InputElement headerName='Title: ' handleChange={this.handleChangeTitle} value={title} />
                    <InputElement headerName='Body: ' handleChange={this.handleChangeBody} value={body} />
                <button type="submit" className="btn btn-success btn-lg">
                  ADD   
                </button>
              </form>
            

        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        addPost: post => dispatch(addPost(post))
    }
}

const PostForm = connect(null, mapDispatchToProps)(PostFormConnected)

export default PostForm;