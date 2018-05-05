import React, { Component } from 'react'
import { Grid, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import AddCommentForm from "./AddCommentForm";
import ScoreContainer from "../containers/ScoreContainer";

class Comment extends Component {

    constructor(props) {
        super(props)
        this.removeComment = this.removeComment.bind(this);
    }

    removeComment = comment => {
        const { commentData } = this.props;
        this.props.onRemoveComment(commentData.id)
    }

    render() {

        const { commentData } = this.props;

        return (

                <Grid>
                    <Row className="show-grid">
                        <Col xs={10} md={11}>
                            <p>
                                {commentData.body}
                            </p>
                        </Col>

                        <Col xs={6} md={3}>
                            <b>Author</b>
                        </Col>

                        <Col xs={6} md={7}>
                            <b>Publication Date</b>
                        </Col>
                        <Col xs={6} md={2}>
                            <b>Score</b>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={10} md={11}>
                        </Col>

                        <Col xs={6} md={3}>
                           {commentData.author}
                        </Col>

                        <Col xs={6} md={7}>
                            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(commentData.timestamp)}
                        </Col>
                        <Col xs={6} md={2}>
                          {commentData.voteScore}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={7}>

                        </Col>
                        <Col xs={6} md={1}></Col>
                        <Col xs={6} md={3}></Col>
                        <Col xs={6} md={1}>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
                            <ScoreContainer votetype="COMMENT" commentData={commentData} />
                        </Col>
                        <Col xs={6} md={6}>
                            <ButtonToolbar>
                                <AddCommentForm message="Edit" editComment={commentData} onUpdateComment={this.props.onUpdateComment} />
                                <Button bsStyle="danger" bsSize="small" onClick={this.removeComment}>Delete</Button>
                            </ButtonToolbar>
                        </Col>

                    </Row>
                </Grid>
        )
    }
}

export default Comment