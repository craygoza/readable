import React, { Component } from 'react'
import { Button, ButtonToolbar } from "react-bootstrap";


class Score extends Component {
    constructor(props){
        super(props);
        this.handleDownVote = this.handleDownVote.bind(this)
        this.handleUpVote = this.handleUpVote.bind(this)
        this.performVoting = this.performVoting.bind(this)
    }

    handleDownVote = () => {
        let option = {option:'downVote'}

        this.performVoting(option)
    }

    handleUpVote() {
        let option = {option:'upVote'}

        this.performVoting(option)
    }

    performVoting = (option) => {
        if (this.props.votetype === 'POST') {
            this.props.fetchUpdateScore(this.props.postData, option)
        }
        else {
            this.props.fetchUpdateCommentScore(this.props.commentData, option)
        }
    }

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="info" bsSize="small" onClick={this.handleUpVote}>Up vote</Button>
                    <Button bsStyle="warning"  bsSize="small" onClick={this.handleDownVote}>Down vote</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Score