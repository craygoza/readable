import * as ReadableAPI from "../util/ReadableAPI";
import {
    CREATE_COMMENT,
    RECEIVE_COMMENTS,
    REMOVE_COMMENT,
    REQUEST_COMMENTS,
    UPDATE_COMMENT,
    UPDATE_COMMENT_SCORE
} from "./actionTypes";


export const receiveComments = (post, comments) => (
    {
        type: RECEIVE_COMMENTS,
        comments: comments,
        post: post
    });

export const removeComment= comment => {
    return  {
        type: REMOVE_COMMENT,
        comment: comment
    }
};

export const fetchRemoveComment = (comment) => {
    console.log('-> fetchRemoveComment')
    return dispatch => {
        return ReadableAPI.fetchRemoveComment(comment)
            .then(val => dispatch(removeComment(val)))
    }
}

export const createComment = comment => ({
    type: CREATE_COMMENT,
    comment
});

export const fetchCreateComment = (comment) => {
    return dispatch => {
        return ReadableAPI.createComment(comment)
            .then(val => dispatch(createComment(val)))
    }
}

export const updateComment = comment => ({
    type: UPDATE_COMMENT,
    comment
});

export const fetchUpdateComment = (comment) => {
    return dispatch => {
        return ReadableAPI.updateComment(comment)
            .then(val => dispatch(updateComment(val)))
    }
}

export const requestComments = () => ({
    type: REQUEST_COMMENTS
});

export const updateCommentScore = (comment) => ({
    type: UPDATE_COMMENT_SCORE,
    comment
});

export const fetchUpdateCommentScore = (comment, option) => {
    return dispatch => {
        return ReadableAPI.updateCommentScore(comment, option)
            .then(val => dispatch(updateCommentScore(val)))
    }
}
