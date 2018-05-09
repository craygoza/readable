import { connect } from 'react-redux'
import PostList from '../components/PostList'
import {fetchPosts, fetchPostsByCategory, fetchCommentsByPost, sortPostByScore, fetchRemovePost, sortPostByDate, fetchUpdatePost} from "../actions";
import React from 'react'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, { match }) => {
    return {
        ...state,
        category: match.params.category
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPostsByCategory: (data) => dispatch(fetchPostsByCategory(data)),
        sortPostsByScore: (data) => dispatch(sortPostByScore(data)),
        sortPostsByDate: (data) => dispatch(sortPostByDate(data)),
        fetchRemovePost: (data) => dispatch(fetchRemovePost(data)),
        fetchCommentsByPost: (data) => dispatch(fetchCommentsByPost(data)),
        fetchUpdatePost:(data) => dispatch(fetchUpdatePost(data))
    }
}

let PostListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))

export default PostListContainer