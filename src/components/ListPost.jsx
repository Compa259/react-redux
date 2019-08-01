import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import fetchListPost from '../js/services/fetchListPost';

class ListPostConnected extends Component {
    constructor(props){
        super(props);
        this.state = {
            listpost: this.props.listpost
        }
    }

    render(){
        const { listpost } = this.props;
        return(
            listpost.length > 0 &&
            listpost.map((post) =>
                <Post post={post} key={post.id}></Post> 
            )
        );
    }

    componentDidMount(){
        this.props.fetchListPost();
    }
}

function mapStateToProps(state){
    return{
        listpost: state.listpost
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchListPost: fetchListPost
}, dispatch);


const ListPost = connect(mapStateToProps, mapDispatchToProps)(ListPostConnected)

export default ListPost;