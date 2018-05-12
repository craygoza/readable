import {RECEIVE_COMMENTS, REMOVE_COMMENT, CREATE_COMMENT, UPDATE_COMMENT, UPDATE_COMMENT_SCORE} from "../actions/actionTypes";

function commentsReducer(state = {comments: new Map()}, action) {
    let commentsMap, commentList, newPostData

    switch (action.type){
        case RECEIVE_COMMENTS:
            commentsMap = state.comments
            commentsMap.set(action.post.id, action.comments)

            return {
                ...state,
                comments: commentsMap
            };
        case REMOVE_COMMENT:
            commentsMap = removeComment(state, action.comment)

            return {
                ...state,
                comments: commentsMap
            };
        case CREATE_COMMENT:
            commentsMap = createComment(state, action.comment)

            return {
                ...state,
                comments: commentsMap,
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: replaceComment(state, action.comment)
            };
        case UPDATE_COMMENT_SCORE:
            return {
                ...state,
                comments: replaceCommentScore(state, action.comment)
            };

        default:
            return state
    }
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

export default commentsReducer