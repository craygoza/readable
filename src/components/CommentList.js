import React, { Component } from 'react'
import { Grid, Row, Col } from "react-bootstrap";
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";
import {
    fetchCommentsByPost, fetchRemoveComment, fetchCreateComment, fetchUpdateComment
} from "../actions";
import {connect} from "react-redux";


class CommentList extends Component {
    render(){

        let { postData, comments } = this.props

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={12} >
                            <ol>
                                <li className="list-group-item">
                                    {comments && comments.map(comment => (
                                        <Comment key={comment.id} commentData={comment} onRemoveComment = {this.props.fetchRemoveComment}  onUpdateComment={this.props.fetchUpdateComment} />
                                    ))}
                                </li>
                            </ol>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} md={3} />
                        <Col xs={10} md={3} />
                        <Col xs={10} md={3} />
                        <Col xs={10} md={3} />
                    </Row>
                    <Row>
                        <Col xs={10} md={3} />
                        <Col xs={10} md={3} />
                        <Col xs={10} md={3} />
                        <Col xs={10} md={3}>
                            <AddCommentForm message="Add Comment" postData={postData} onCreateComment={this.props.fetchCreateComment} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCommentsByPost: (data) => dispatch(fetchCommentsByPost(data)),
        fetchRemoveComment: (data) => dispatch(fetchRemoveComment(data)),
        fetchCreateComment: (data) => dispatch(fetchCreateComment(data)),
        fetchUpdateComment: (data) => dispatch(fetchUpdateComment(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)