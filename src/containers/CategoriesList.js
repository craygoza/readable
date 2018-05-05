import { connect } from 'react-redux'
import { setCategoryFilter, fetchPostsByCategory } from "../actions";
import Categories from '../components/Categories'
import { fetchCategories } from "../actions";
import React, { Component } from 'react'

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        active: ownProps.filter === state.categoryFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPostsByCategory: (data) => dispatch(fetchPostsByCategory(data))
    }
}

let CategoriesList = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesList
