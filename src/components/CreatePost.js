
import React, { Component } from 'react'
import ModalX from './ModalX.js'

import { Form, FormControl, ControlLabel, FormGroup, Button, Col, Checkbox, Popover,
    Tooltip, OverlayTrigger, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

class CreatePost extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            isModalOpen: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClick = e => {

        console.log(this.title.value)
        console.log(this.author.value)

        let data = {
          id:'15',
          timestamp: Date.now(),
          title: this.title.value,
          body: this.body.value,
          author: this.author.value,
          category: this.category.value
        };

        this.props.fetchCreatePost(data)

 /*       id - UUID should be fine, but any unique id will work
        timestamp - [Timestamp] Can in whatever format you like, you can use Date.now() if you like.
            title - [String]
        body - [String]
        author - [String]
        category - Any of the categories listed in categories.js. Feel free to extend this list as you desire.*/
       // this.props.onClick();
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    render() {
        console.log(this.props)

        let {categoryFilter} = this.props

        return (
            <div>
                <button styles="btn btn-primary" onClick={() => this.openModal()}>Create Post</button>
                <ModalX isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <Form>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Title</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Title" inputRef={ref => {
                                this.title = ref;
                            }}/>
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Body</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Body" inputRef={ref => {
                                this.body = ref;
                            }}/>
                        </FormGroup>{' '}

                        <FormGroup controlId="formInlineAuthor">
                            <ControlLabel>Author</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Author" inputRef={ref => {
                                this.author = ref;
                            }}/>
                        </FormGroup>{' '}

                        <FormGroup controlId="formInlineCategory">
                            <ControlLabel>Category</ControlLabel>{' '}
                            {/*<FormControl type="text" placeholder="category"  inputRef={ref => { this.category = ref; }} />*/}

                            <div styles={{float: 'right', paddingRight: '5px'}}>
                                <b></b>
                                <select id="categories" class="dropdown-toggle btn btn-default"  ref={ref => {
                                    this.category = ref;
                                }}>
                                    {categoryFilter.categories && categoryFilter.categories.map(category => (
                                        <option key={category.name}>{category.name}</option>
                                    ))}

                                </select>
                            </div>
                        </FormGroup>{' '}

                        <Button bsStyle="primary" onClick={this.handleClick}>Create Post</Button>
                    </Form>
                </ModalX>
            </div>
        );
    }
}

export default  CreatePost



