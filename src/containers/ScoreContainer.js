import { connect } from 'react-redux'
import React from 'react'
import { fetchUpdateScore, fetchUpdateCommentScore } from '../actions'
import Score from "../components/Score";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUpdateScore: (post, option) => dispatch(fetchUpdateScore(post, option)),
        fetchUpdateCommentScore: (comment, option) => dispatch(fetchUpdateCommentScore(comment, option))
    }
}

let ScoreContainer = connect(mapStateToProps, mapDispatchToProps)(Score)

export default ScoreContainer
