import React, { Component } from 'react'
import Post from "./Post";
import { Grid, Row, Col } from "react-bootstrap";
import CreatePostContainer from "../containers/CreatePostContainer";

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    handleClick = e => {
        console.log(e.target.value);

        let { postReducer } = this.props

        if (e.target.value == 'Score'){
            this.props.sortPostsByScore(postReducer.posts);
        }
        else {
            this.props.sortPostsByDate(postReducer.posts);
        }
    }

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: !this.state.show });
    }

    render(){

        let { postReducer } = this.props

        return (
            <div>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={10} md={8} >
                        <div styles={{float : 'right', paddingRight : '5px'}}>
                                    <b>Sort By: </b>
                                    <select id = "myList" styles="dropdown-toggle btn btn-default" onChange={this.handleClick}>
                                        <option name="Date"  value = "Date">Date</option>
                                        <option name="Score" value = "Score">Score</option>
                                    </select>

                        </div>
                        </Col>
                        <Col xs={10} md={4}>
                            <CreatePostContainer message="Create Post"/>
                        </Col>
                    </Row>
                    <Row className="show-grid">

                        <Col xs={10} md={12}>
                            <ol>
                            {postReducer.posts && postReducer.posts.map(post => (
                                <Post key={post.id}
                                      postData={post}
                                      comments={postReducer.comments}
                                      onRemove={this.props.fetchRemovePost}
                                      onCommentsRequest={this.props.fetchCommentsByPost}
                                     />
                            ))}
                            </ol>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default PostList