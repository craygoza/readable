import { combineReducers } from 'redux'
import categoryFilter from "./CategoryFilter";
import {RECEIVE_POSTS, RECEIVE_COMMENTS, CREATE_POST, SORT_POST_BY_SCORE, REMOVE_POST, REMOVE_COMMENT, SORT_POST_BY_DATE, CREATE_COMMENT, UPDATE_COMMENT, UPDATE_POST, UPDATE_POST_SCORE, UPDATE_COMMENT_SCORE} from "../actions";

function postReducer(state = {comments: new Map()}, action){
    switch (action.type){
        case RECEIVE_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case RECEIVE_COMMENTS:
            let commentsMap = state.comments
            commentsMap.set(action.post.id, action.comments)

            return {
                ...state,
                comments: commentsMap
            };
        case CREATE_POST:
            let currentPosts = state.posts
            currentPosts.push(action.post)

            return {
                ...state,
                posts: currentPosts
            };
        case SORT_POST_BY_SCORE:
            return {
                ...state,
                posts: action.posts
            };
        case SORT_POST_BY_DATE:
            return {
                ...state,
                posts: action.posts
            };
        case REMOVE_COMMENT:
            let commentsCurrentMap = removeComment(state, action.comment)

            return {
                ...state,
                comments: commentsCurrentMap
            };
        case REMOVE_POST:
            let newPosts = state.posts.filter(post => post.id != action.post.id)

            return {
                ...state,
                posts: newPosts
            };
        case CREATE_COMMENT:
            let commentsCurrent = state.comments
            commentsCurrent.get(action.comment.parentId).push(action.comment)
            return {
                ...state,
                comments: commentsCurrent
            };
        case UPDATE_COMMENT:
            let updateCommentsMap = replaceComment(state, action.comment)

            return {
                ...state,
                comments: updateCommentsMap
            };
        case UPDATE_POST:
            let posts = state.posts
            posts = posts.filter(post => post.id != action.post.id)
            posts.push(action.post)

            return {
                ...state,
                posts: posts
            };
        case UPDATE_POST_SCORE:

            posts = updateScore(state.posts, action.post)

            return {
                ...state,
                posts: posts
            };
        case UPDATE_COMMENT_SCORE:
            commentsCurrent = replaceCommentScore(state, action.comment);

            return {
                ...state,
                comments: commentsCurrent
            };

        default:
            return state
    }
}

let updateScore = (list, newPostData) => {
    for (let element of list){
        if (element.id == newPostData.id){
            element.voteScore = newPostData.voteScore
        }
    }
    return list
}

let removeComment = (state, comment) => {
    let commentsCurrentMap = state.comments
    let commentsList = commentsCurrentMap.get(comment.parentId)

    if (commentsList && commentsList.length > 0) {
        commentsList = commentsList.filter(commentObj => commentObj.id != comment.id)
        commentsCurrentMap.set(comment.parentId, commentsList)
    }

    return commentsCurrentMap;
}

let replaceComment = (state, comment) => {
    let commentsCurrent = state.comments
    let comments = commentsCurrent.get(comment.parentId)
    comments = comments.filter(obj => obj.id != comment.id)
    comments.push(comment)

    commentsCurrent.set(comment.parentId, comments)

    return commentsCurrent;
}

let replaceCommentScore = (state, comment) => {
    let commentsCurrent = state.comments
    let comments = commentsCurrent.get(comment.parentId)
    comments = updateScore(comments, comment)

    commentsCurrent.set(comment.parentId, comments)

    return commentsCurrent;
}

const reducerApp = combineReducers({
    categoryFilter, postReducer
})

export default reducerApp