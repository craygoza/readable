import React, { Component } from 'react'
import {Grid, Row, Col, Button, ButtonToolbar} from "react-bootstrap";
import CommentList from "./CommentList";
import CreatePostContainer from "../containers/CreatePostContainer";
import ScoreContainer from "../containers/ScoreContainer";
import {Link} from "react-router-dom";

class PostDetail extends Component {

    componentDidMount() {
        this.props.fetchPostById(this.props.post_id).then(post => {
                const { postData } = post

                if (!postData.id){
                    this.redirect404()
                }

                return this.props.fetchCommentsByPost(postData)
            }
        )
    }

    removePost = post => {
        this.props.fetchRemovePostDetail(this.props.postReducer.postData)
    }

    redirect404 = () => {
        this.props.history.push("/404")
        return null
    }

    render() {

        const { postData } = this.props.postReducer;
        const { comments } = this.props.commentsReducer;

       if (postData && postData.deleted === true){
            this.redirect404()
       }

        return (
            (postData ?
                <Grid>
                    <Row className="show-grid">
                        <Col xs={10} md={8}>
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
                        <Col xs={6} md={8}>
                            <CommentList postData={postData} comments={comments.get(postData.id)}  fetchRemoveComment={this.props.fetchRemoveComment}  />
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
                            <ScoreContainer votetype="POST_DETAIL" postData={postData} />
                        </Col>
                        <Col xs={10} md={4}>
                        </Col>
                        <Col xs={10} md={4}>
                            <ButtonToolbar>
                                <CreatePostContainer message="Edit" postData={postData} fetchUpdatePost={this.props.fetchUpdatePostDetail} />
                                <Button bsSize="small" bsStyle="danger" onClick={() => this.removePost()}>Delete</Button>
                                <Link className="btn btn-sm btn-primary" to="/" > Return to Home </Link>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid> : null
            )
        )
    }
}

export default PostDetail