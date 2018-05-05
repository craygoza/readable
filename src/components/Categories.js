import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Categories extends Component {
    componentDidMount(){
        this.props.fetchCategories();
    }

    handleClick = e => {
        this.props.fetchPostsByCategory(e.target.innerText);
    }

    render(){

        let { categoryFilter } = this.props

        return (
            <div>
                <ListGroup>
                 {categoryFilter.categories && categoryFilter.categories.map(category => (
                     <ListGroupItem key={category.name} onClick={this.handleClick}> {category.name}
                     </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    }
}

export default Categories
