import React from 'react'
import { Button, FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import Modal from 'react-modal';

class AddCommentForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.toggleShow = this.toggleShow.bind(this);
        this.handleCreateComment = this.handleCreateComment.bind(this);

        this.state = {
            show: false
        };
    }

    toggleShow() {
        this.setState({ show: !this.state.show }) // open if close and vice-versa
    }

    handleCreateComment() {

        const { postData, editComment, message } = this.props;

        const uuidv1 = require('uuid/v1');

        if (!editComment) {
            const newComment = {
                id: uuidv1(),
                parentId: this.props.postData.id,
                body: this.body.value,
                author: this.author.value,
                timestamp: Date.now()
            }
            this.props.onCreateComment(newComment);
        }
        else {
            const newEditComment = {
                id: editComment.id,
                parentId: editComment.parentId,
                body: this.body.value,
                author: this.author.value,
                timestamp: editComment.timestamp
            }
            this.props.onUpdateComment(newEditComment);
        }

        this.toggleShow()
    }

    render() {

        const { postData, editComment, message } = this.props;

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
                    {postData ?
                        <h1 id="heading">Adding comment to Post: {postData.title}</h1> :
                        <h1 id="heading">Editing Comment</h1>
                    }
                    <div id="full_description">
                        <p>Add a comment following code of conduct</p>
                    </div>
                    <form>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Comment Body</ControlLabel>{' '}
                            <FormControl type="body" defaultValue={editComment ? editComment.body: ''}  placeholder="Body" inputRef={ ref => { this.body = ref }} />
                            </FormGroup>{' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Author</ControlLabel>{' '}
                            <FormControl type="author" defaultValue={editComment ? editComment.author: ''}
                                         placeholder="Author" inputRef={ ref => { this.author = ref }} >

                            </FormControl>
                        </FormGroup>{' '}

                        <Button onClick={this.handleCreateComment} bsStyle="primary">Save</Button>

                        <Button onClick={this.toggleShow}>Close</Button>
                    </form>

                </Modal>
            </div>
        );
    }
}

export default AddCommentForm