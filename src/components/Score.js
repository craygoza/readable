import React, { Component } from 'react'
import { Button, ButtonToolbar } from "react-bootstrap";


class Score extends Component {
    handleDownVote = () => {
        let option = {option:'downVote'}

        performVoting(option, this.props.votetype, this.props.postData, this.props.commentData,
            this.props.fetchUpdateScore, this.props.fetchUpdateCommentScore, this.props.fetchUpdateScoreDetail)
    };

    handleUpVote = () => {
        let option = {option:'upVote'}

        performVoting(option, this.props.votetype, this.props.postData, this.props.commentData,
            this.props.fetchUpdateScore, this.props.fetchUpdateCommentScore, this.props.fetchUpdateScoreDetail)
    }

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="info" bsSize="small" onClick={() => this.handleUpVote()}>Up vote</Button>
                    <Button bsStyle="warning"  bsSize="small" onClick={() => this.handleDownVote()}>Down vote</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

const performVoting = (option, votetype, postData, commentData, fetchUpdateScore, fetchUpdateCommentScore, fetchUpdateScoreDetail) => {
    if (votetype === 'POST') {
        fetchUpdateScore(postData, option)
    }
    else if (votetype === 'POST_DETAIL') {
        fetchUpdateScoreDetail(postData, option)
    }
    else {
        fetchUpdateCommentScore(commentData, option)
    }
}
export default Score