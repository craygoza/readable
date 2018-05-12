import React from 'react'
import * as actions from "../actions";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostDetail from "../components/PostDetail";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        category: (ownProps.match.params.category),
        post_id: ownProps.match.params.post_id,
        ownProps
    }
}

let PostDetailContainer = withRouter(connect(mapStateToProps, actions)(PostDetail))
export default PostDetailContainer