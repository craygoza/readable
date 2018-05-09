import { connect } from 'react-redux'
import React from 'react'
import { fetchUpdateScore, fetchUpdateScoreDetail } from '../actions'
import { fetchUpdateCommentScore } from '../actions/commentActions'
import Score from "../components/Score";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUpdateScore: (post, option) => dispatch(fetchUpdateScore(post, option)),
        fetchUpdateCommentScore: (comment, option) => dispatch(fetchUpdateCommentScore(comment, option)),
        fetchUpdateScoreDetail: (post, option) => dispatch(fetchUpdateScoreDetail(post, option)),
    }
}

let ScoreContainer = connect(mapStateToProps, mapDispatchToProps)(Score)

export default ScoreContainer
