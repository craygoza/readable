import {RECEIVE_POSTS, CREATE_POST, SORT_POST_BY_SCORE, REMOVE_POST, SORT_POST_BY_DATE, RECEIVE_POST,
    UPDATE_POST, UPDATE_POST_SCORE, UPDATE_POST_SCORE_DETAIL, UPDATE_POST_DETAIL, REMOVE_POST_DETAIL, INCREMENT_POST_COMMENT_COUNT, DECREMENT_POST_COMMENT_COUNT} from "../actions/actionTypes";

function postReducer(state = {comments: new Map()}, action) {
    let updatedPost

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
        case UPDATE_POST:
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
        case UPDATE_POST_SCORE_DETAIL:

            return {
                ...state,
                postData: action.post
            };
        case INCREMENT_POST_COMMENT_COUNT:
            updatedPost = action.post;
            updatedPost.commentCount =  updatedPost.commentCount + 1;

            return {
                ...state,
                postData: updatedPost
            };
        case DECREMENT_POST_COMMENT_COUNT:
            updatedPost = action.post;
            updatedPost.commentCount =  updatedPost.commentCount - 1;

            return {
                ...state,
                postData: updatedPost
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

const updateScore = (list, newPostData) => {
    for (let element of list){
        if (element.id == newPostData.id){
            element.voteScore = newPostData.voteScore
        }
    }
    return list
}

export default postReducer