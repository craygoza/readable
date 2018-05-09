import { connect } from 'react-redux'
import { fetchCategories } from "../actions/categoryActions";
import { fetchPostsByCategory } from '../actions'
import Categories from '../components/Categories'
import React, { Component } from 'react'
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPostsByCategory: (data) => dispatch(fetchPostsByCategory(data))
    }
}

let CategoriesList = withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))

export default CategoriesList
