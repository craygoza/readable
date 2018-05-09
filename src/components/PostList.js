import React, { Component } from 'react'
import Post from "./Post";
import { Grid, Row, Col } from "react-bootstrap";
import CreatePostContainer from "../containers/CreatePostContainer";
import CategoriesList from "../containers/CategoriesList";

class PostList extends Component {

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

   componentDidMount(){
        const { category } = this.props

        this.handlePosts(category)
    }

    componentWillReceiveProps(nextProps){

        console.log(nextProps, this.props)

        if (nextProps.category != this.props.category){
            this.handlePosts(nextProps.category)
        }
    }

    handlePosts = category => {
        if (category && category != 'all') {
            this.props.fetchPostsByCategory(category)
        }
        else {
            this.props.fetchPosts();
        }
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

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: !this.state.show });
    }

    redirect404 = () => {
        this.props.history.push("/404")
        return null
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
                        <Col xs={10} md={4}>
                            <CategoriesList />
                        </Col>
                        <Col xs={10} md={8}>
                            <ol>
                            {postReducer.posts && postReducer.posts.map(post => (
                                <Post key={post.id}
                                      postData={post}
                                      comments={postReducer.comments}
                                      onRemove={this.props.fetchRemovePost}
                                      onCommentsRequest={this.props.fetchCommentsByPost}
                                      fetchUpdatePost={this.props.fetchUpdatePost}
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