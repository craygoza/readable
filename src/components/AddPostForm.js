import React from 'react'
import {Tooltip, Button, Popover, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar} from "react-bootstrap";
import Modal from 'react-modal';

class AddPostForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.toggleShow = this.toggleShow.bind(this);
        this.handleCreatePost = this.handleCreatePost.bind(this);

        this.state = {
            show: false
        };
    }

    toggleShow() {
        this.setState({ show: !this.state.show }) // open if close and vice-versa
    }

    handleCreatePost() {

        const { postData, message } = this.props;

        const uuidv1 = require('uuid/v1');

        if (!postData) {

            let newPost = {
                id: uuidv1(),
                timestamp: Date.now(),
                title: this.title.value,
                body: this.body.value,
                author: this.author.value,
                category: this.category.value
            }

            this.props.fetchCreatePost(newPost);
        }
        else {
            let newEditPost = {
                id: postData.id,
                title: this.title.value,
                body: this.body.value,
            }
           this.props.fetchUpdatePost(newEditPost);
        }

        this.toggleShow()
    }

    render() {
        let {categoryFilter, postData, message} = this.props

        return (
            <div>
                <Button bsStyle="primary" bsSize="small" onClick={this.toggleShow}>
                    {message}
                </Button>

                <Modal
                    isOpen={this.state.show}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}>
                    {!postData ?
                        <h1 id="heading">Add New Post</h1> :
                        <h1 id="heading">Editing Post</h1>
                    }
                    <div id="full_description">
                        <p>Add a comment following code of conduct</p>
                    </div>
                    <Form>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Title</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Title" defaultValue={postData ? postData.title : ''} inputRef={ref => {
                                this.title = ref;
                            }}/>
                        </FormGroup>{' '}
                        <FormGroup controlId="formBody" styles="{display: none;}">
                            <ControlLabel>Body</ControlLabel>{' '}
                            <FormControl  type="text" defaultValue={postData ? postData.body: ''} placeholder="Body" inputRef={ref => {
                                this.body = ref;
                            }}/>
                        </FormGroup>{' '}

                        <FormGroup controlId="formInlineAuthor" >
                            <ControlLabel>Author</ControlLabel>{' '}
                            <FormControl type="text"  defaultValue={postData ? postData.author: ''}  placeholder="Author" inputRef={ref => {
                                this.author = ref;
                            }}/>
                        </FormGroup>{' '}

                        <FormGroup controlId="formInlineCategory" >
                            <ControlLabel>Category</ControlLabel>{' '}

                            <div styles={{float: 'right', paddingRight: '5px'}}>
                                <b></b>
                                <select id="categories" className="dropdown-toggle btn btn-default"  ref={ref => {
                                    this.category = ref;
                                }}>
                                    {categoryFilter.categories && categoryFilter.categories.map(category => (
                                        <option key={category.name}>{category.name}</option>
                                    ))}

                                </select>
                            </div>
                        </FormGroup>{' '}

                            <button onClick={this.handleCreatePost} >Save</button>
                            <button onClick={this.toggleShow} >Close</button>

                    </Form>
                </Modal>
            </div>
        );
    }
}

export default AddPostForm