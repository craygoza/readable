import * as ReadableAPI from "../util/ReadableAPI";
import { requestComments, receiveComments} from "./commentActions";
import { RECEIVE_POSTS, REQUEST_POSTS, CREATE_POST, UPDATE_POST, REMOVE_POST, SORT_POST_BY_SCORE, RECEIVE_POST, UPDATE_POST_SCORE_DETAIL, UPDATE_POST_DETAIL,
    SORT_POST_BY_DATE, UPDATE_POST_SCORE, REMOVE_POST_DETAIL, INCREMENT_POST_COMMENT_COUNT, DECREMENT_POST_COMMENT_COUNT} from "../actions/actionTypes";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    postData:post
});

export const createPost = post => ({
    type: CREATE_POST,
    post
});

export const updatePost = post => ({
    type: UPDATE_POST,
    post
});

export const updatePostDetail = post => ({
    type: UPDATE_POST_DETAIL,
    post
});

export const incrementPostCommentCount = post => ({
    type: INCREMENT_POST_COMMENT_COUNT,
    post
});

export const decrementPostCommentCount = post => ({
    type: DECREMENT_POST_COMMENT_COUNT,
    post
});

export const requestPosts = () => ({
    type: REQUEST_POSTS
});

export const fetchPosts = () => {
    return dispatch => {
        dispatch(requestPosts());
        return ReadableAPI.getPosts()
            .then(posts => dispatch(receivePosts(posts)))
    }
}

export const fetchPostsByCategory = (categoryId) => {
    return dispatch => {
        dispatch(requestPosts());
        return ReadableAPI.getPostsByCategory(categoryId)
            .then(posts => dispatch(receivePosts(posts)))
    }
}

export const fetchCreatePost = (post) => {
    return dispatch => {
        dispatch(requestPosts());
        return ReadableAPI.createPost(post)
            .then(val => {
                return dispatch(createPost({...post, ...val})) })
    }
}

export const fetchRemovePost = (post) => {
    return dispatch => {
        return ReadableAPI.removePost(post.id)
            .then(val => dispatch(removePost(val)))
    }
}

export const fetchRemovePostDetail = (post) => {
    return dispatch => {
        return ReadableAPI.removePost(post.id)
            .then(val => dispatch(removePostDetail(val)))
    }
}

export const sortPostByScore = post => {

 let auxPost =  post.sort((a, b) => a.voteScore > b.voteScore);

 return  {
        type: SORT_POST_BY_SCORE,
        posts:auxPost
    }
};

export const removePost = post => {
    return  {
        type: REMOVE_POST,
        post: post
    }
};
export const removePostDetail = post => {
    return  {
        type: REMOVE_POST_DETAIL,
        post: post
    }
};

export const sortPostByDate = posts => {
    let auxPost = posts.sort((a, b) => a.timestamp > b.timestamp);

    return  {
        type: SORT_POST_BY_DATE,
        posts: auxPost
    }
};

export const fetchCommentsByPost = (postObj) => {
    return dispatch => {
        dispatch(requestComments());
        return ReadableAPI.getCommentsByPost(postObj)
            .then(comments => dispatch(receiveComments(postObj, comments)))
    }
}

export const fetchUpdatePost = (post) => {
    return dispatch => {
        return ReadableAPI.updatePost(post)
            .then(val => dispatch(updatePost(val)))
    }
}

export const fetchUpdatePostDetail = (post) => {
    return dispatch => {
        return ReadableAPI.updatePost(post)
            .then(val => dispatch(updatePostDetail(val)))
    }
}

export const updateScore = (post) => ({
    type: UPDATE_POST_SCORE,
    post
});

export const updateScoreDetail = (post) => ({
    type: UPDATE_POST_SCORE_DETAIL,
    post
});

export const fetchUpdateScore = (post, option) => {
    return dispatch => {
        return ReadableAPI.updateScore(post, option)
            .then(val => dispatch(updateScore(val)))
    }
}

export const fetchUpdateScoreDetail = (post, option) => {
    return dispatch => {
        return ReadableAPI.updateScore(post, option)
            .then(val => dispatch(updateScoreDetail(val)))
    }
}

export const fetchPostById = (data) => {
    return dispatch => {
        dispatch(requestPosts());
        return ReadableAPI.fetchPostById(data)
            .then(post => dispatch(receivePost(post)))
    }
}


