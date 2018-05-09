import { connect } from 'react-redux'
import { fetchCreatePost, fetchUpdatePost } from "../actions";
import React from 'react'
import AddPostForm from "../components/AddPostForm";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        fetchUpdatePost: ownProps.fetchUpdatePost
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCreatePost: (data) => dispatch(fetchCreatePost(data)),
        //fetchUpdatePost: (data) => dispatch(fetchUpdatePost(data)),
    }
}

let CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostForm)

export default CreatePostContainer