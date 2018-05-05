import * as ReadableAPI from "../util/ReadableAPI";

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const SORT_POST_BY_SCORE = "SORT_POST_BY_SCORE";
export const SORT_POST_BY_DATE = "SORT_POST_BY_DATE";

export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const UPDATE_POST_SCORE = "UPDATE_POST_SCORE";
export const UPDATE_COMMENT_SCORE = "UPDATE_COMMENT_SCORE";

export function setCategoryFilter( filter ){
    return {
        type: SET_CATEGORY_FILTER,
        filter
    }
}

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const requestCategories = () => ({
    type: REQUEST_CATEGORIES
});

export const fetchCategories = () => {
   return dispatch => {
       dispatch(requestCategories());
       return ReadableAPI.getCategories()
           .then(categories => dispatch(receiveCategories(categories)))
   }
}

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const createPost = post => ({
    type: CREATE_POST,
    post
});

export const updatePost = post => ({
    type: UPDATE_POST,
    post
});

export const requestPosts = () => ({
    type: REQUEST_POSTS
});

export const requestComments = () => ({
    type: REQUEST_COMMENTS
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
            .then(val => dispatch(removePost(post)))
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

export const fetchUpdatePost = (post) => {
    return dispatch => {
        return ReadableAPI.updatePost(post)
            .then(val => dispatch(updatePost(val)))
    }
}

export const updateScore = (post) => ({
    type: UPDATE_POST_SCORE,
    post
});

export const updateCommentScore = (comment) => ({
    type: UPDATE_COMMENT_SCORE,
    comment
});

export const fetchUpdateScore = (post, option) => {
    return dispatch => {
        return ReadableAPI.updateScore(post, option)
            .then(val => dispatch(updateScore(val)))
    }
}

export const fetchUpdateCommentScore = (comment, option) => {
    return dispatch => {
        return ReadableAPI.updateCommentScore(comment, option)
            .then(val => dispatch(updateCommentScore(val)))
    }
}


