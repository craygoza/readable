import { connect } from 'react-redux'
import PostList from '../components/PostList'
import {fetchPosts, fetchPostsByCategory, fetchCommentsByPost, sortPostByScore, fetchRemovePost, sortPostByDate} from "../actions";
import React from 'react'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPostsByCategory: () => dispatch(fetchPostsByCategory()),
        sortPostsByScore: (data) => dispatch(sortPostByScore(data)),
        sortPostsByDate: (data) => dispatch(sortPostByDate(data)),
        fetchRemovePost: (data) => dispatch(fetchRemovePost(data)),
        fetchCommentsByPost: (data) => dispatch(fetchCommentsByPost(data))
    }
}

let PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer