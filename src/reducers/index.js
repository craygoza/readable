import { combineReducers } from 'redux'
import categoryFilter from "./CategoryFilter";
import {RECEIVE_POSTS, RECEIVE_COMMENTS, CREATE_POST, SORT_POST_BY_SCORE, REMOVE_POST, REMOVE_COMMENT, SORT_POST_BY_DATE, RECEIVE_POST,
    CREATE_COMMENT, UPDATE_COMMENT, UPDATE_POST, UPDATE_POST_SCORE, UPDATE_COMMENT_SCORE, UPDATE_POST_SCORE_DETAIL, UPDATE_POST_DETAIL, REMOVE_POST_DETAIL} from "../actions/actionTypes";

function postReducer(state = {comments: new Map()}, action) {
    let commentsMap, commentList, newPostData

    switch (action.type){
        case RECEIVE_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case RECEIVE_POST:
            return {
                ...state,
                postData: action.postData
            };
        case RECEIVE_COMMENTS:
            commentsMap = state.comments
            commentsMap.set(action.post.id, action.comments)

            return {
                ...state,
                comments: commentsMap
            };
        case CREATE_POST:
            return {
                ...state,
                posts: createPost(state, action.post)
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
            commentsMap = removeComment(state, action.comment)
            commentList = commentsMap.get(action.comment.parentId)

            newPostData = state.postData
            newPostData.commentCount = commentList.length

            return {
                ...state,
                comments: commentsMap,
                postData: newPostData
            };
        case REMOVE_POST:
            return {
                ...state,
                posts:  state.posts.filter(post => post.id != action.post.id)
            };
        case REMOVE_POST_DETAIL:
            return {
                ...state,
                postData: action.post
            };
        case CREATE_COMMENT:
            commentsMap = createComment(state, action.comment)
            commentList = commentsMap.get(action.comment.parentId)

            newPostData = state.postData
            newPostData.commentCount = commentList.length

            return {
                ...state,
                comments: commentsMap,
                postData: newPostData
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: replaceComment(state, action.comment)
            };
        case UPDATE_POST:
         /*   let posts = state.posts
            posts = posts.filter(post => post.id != action.post.id)
            posts.push(action.post)*/

            return {
                ...state,
                posts: updatePost(state, action.post)
            };
        case UPDATE_POST_DETAIL:
            return {
                ...state,
                postData: action.post
            };
        case UPDATE_POST_SCORE:

            return {
                ...state,
                posts: updateScore(state.posts, action.post)
            };
        case UPDATE_COMMENT_SCORE:
            return {
                ...state,
                comments: replaceCommentScore(state, action.comment)
            };
        case UPDATE_POST_SCORE_DETAIL:

            return {
                ...state,
                postData: action.post
            };

        default:
            return state
    }
}

const createPost = (state, post) =>

{
    let currentPosts = state.posts
    currentPosts.push(post)

    return currentPosts;
}

const updatePost = (state, post) => {
    let posts = state.posts

    const index = posts.findIndex(postObj => postObj.id == post.id)

    if (index > -1) {
       posts[index] = post
    }

    return posts
}

const createComment = (state, comment) => {
    let commentsCurrent = state.comments

    if (commentsCurrent.has(comment.parentId)){
        commentsCurrent.get(comment.parentId).push(comment)
    }

    return commentsCurrent
}

const updateScore = (list, newPostData) => {
    for (let element of list){
        if (element.id == newPostData.id){
            element.voteScore = newPostData.voteScore
        }
    }
    return list
}

const removeComment = (state, comment) => {
    let commentsCurrentMap = state.comments
    let commentsList = commentsCurrentMap.get(comment.parentId)

    if (commentsList && commentsList.length > 0) {
        commentsList = commentsList.filter(commentObj => commentObj.id != comment.id)
        commentsCurrentMap.set(comment.parentId, commentsList)
    }

    return commentsCurrentMap;
}

const replaceComment = (state, comment) => {
    let commentsCurrent = state.comments
    let comments = commentsCurrent.get(comment.parentId)
    comments = comments.filter(obj => obj.id != comment.id)
    comments.push(comment)

    commentsCurrent.set(comment.parentId, comments)

    return commentsCurrent;
}

const replaceCommentScore = (state, comment) => {
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