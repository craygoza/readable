import { connect } from 'react-redux'
import {fetchPosts, fetchPostsByCategory, fetchCommentsByPost, sortPostByScore, fetchRemovePostDetail, sortPostByDate, fetchPostById, fetchUpdatePostDetail} from "../actions";
import React from 'react'
import { withRouter } from 'react-router-dom'
import PostDetail from "../components/PostDetail";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        category: (ownProps.match.params.category),
        post_id: ownProps.match.params.post_id,
        ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchRemovePostDetail: (data) => dispatch(fetchRemovePostDetail(data)),
        fetchCommentsByPost: (data) => dispatch(fetchCommentsByPost(data)),
        fetchPostById:(data) => dispatch(fetchPostById(data)),
        fetchUpdatePostDetail:(data) => dispatch(fetchUpdatePostDetail(data))
    }
}

let PostDetailContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail))

export default PostDetailContainer