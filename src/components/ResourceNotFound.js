import React, { Component } from 'react'
import {Button} from "react-bootstrap";

class ResourceNotFound extends Component {

    homePage = () =>{
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <p>404 - Resource Not Found </p>
                <Button bsStyle="primary" onClick={() => this.homePage()}>Return to Home Page</Button>
            </div>

        )
    }
}

export default ResourceNotFound