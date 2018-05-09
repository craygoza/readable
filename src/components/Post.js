import React, { Component } from 'react'
import {Grid, Row, Col, Button, ButtonToolbar} from "react-bootstrap";
import CreatePostContainer from "../containers/CreatePostContainer";
import ScoreContainer from "../containers/ScoreContainer";
import {Link} from "react-router-dom";

class Post extends Component {

    removePost = post => {
        this.props.onRemove(this.props.postData)
    }

    render() {
        const {postData} = this.props;
        return (
            <li className="list-group-item">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={10} md={11}>
                            <h3> {postData.title} </h3>
                            <p>
                                {postData.body}
                            </p>
                            <p>
                                <b>Category:</b> {postData.category}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            <b>Author:</b> {postData.author}
                        </Col>

                        <Col xs={6} md={3}>
                            <b># of Comments:</b> {postData.commentCount}
                        </Col>
                        <Col xs={6} md={3}>
                            <b>Score:</b> {postData.voteScore}
                        </Col>
                        <Col xs={6} md={4}>
                            <b>Publication Date:</b> {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(postData.timestamp)}
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={10} md={4}>
                            <ScoreContainer votetype="POST" postData={postData} />
                        </Col>
                        <Col xs={10} md={4}>
                        </Col>
                        <Col xs={10} md={4}>
                            <ButtonToolbar>
                                <CreatePostContainer message="Edit" postData={postData} fetchUpdatePost={this.props.fetchUpdatePost} />
                                <Button bsSize="small" bsStyle="danger" onClick={this.removePost}>Delete</Button>
                                <Link to={'/' + postData.category + '/' + postData.id} className="btn btn-success" > Post Details </Link>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
            </li>
        )
    }
}

export default Post