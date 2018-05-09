import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Categories extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchCategories();
    }

    handleClick = category => {
       this.props.history.push(category.path)
    }

    render(){

        let { categoryFilter } = this.props

        return (
            <div>
                <ListGroup>
                 {categoryFilter.categories && categoryFilter.categories.map(category => {
                     let handleClick = this.handleClick.bind(this, category);

                    return  <ListGroupItem key={category.path} onClick={handleClick}> {category.name}
                     </ListGroupItem>
                 })}
                </ListGroup>
            </div>
        )
    }
}

export default Categories
