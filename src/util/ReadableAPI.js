
const api = "http://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want',
    'Content-Type':'application/json'

}
export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)


export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

export const getPostsByCategory = (categoryId) =>
    fetch(`${api}/${categoryId}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

export const createPost = (data) => {
    let params = {
        method: 'post',
        body: JSON.stringify(data),
        headers:headers
    }

  return fetch(`${api}/posts`, params)
        .then(res => res.json())
}

export const updatePost = (data) => {
    let params = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:headers
    }

    return  fetch(`${api}/posts/${data.id}`, params)
        .then(res => {
            let jsonResp = res.json()
            console.log(jsonResp)
            return jsonResp
        })
}

export const removePost = (id) => {
    let params = {
        method: 'DELETE',
        headers: headers
    }

    return  fetch(`${api}/posts/${id}`, params)
        .then(res => {
            let jsonResp = res.json()
            console.log(jsonResp)
            return jsonResp
        })
}

export const getCommentsByPost = (post) =>
    fetch(`${api}/posts/${post.id}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)


export const fetchRemoveComment = (id) => {
    console.log('-->ReadableAPI:fetchRemoveComment')

    let params = {
        method: 'DELETE',
        headers: headers
    }

    return  fetch(`${api}/comments/${id}`, params)
        .then(res => {
            let jsonResp = res.json()
            console.log(jsonResp)
            return jsonResp
        })
}
export const createComment = (data) => {
    let params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:headers
    }

    return  fetch(`${api}/comments`, params)
        .then(res => {
            let jsonResp = res.json()
            console.log(jsonResp)
            return jsonResp
        })
}

export const updateComment = (data) => {
    let params = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:headers
    }

    return  fetch(`${api}/comments/${data.id}`, params)
        .then(res =>  {
            let jsonResp = res.json()
            console.log(jsonResp)
            return jsonResp
        })
}

export const updateScore = (post, option) => {
    let params = {
        method: 'POST',
        body: JSON.stringify(option),
        headers:headers
    }

    return fetch(`${api}/posts/${post.id}`, params)
        .then(res =>  res.json())
}

export const updateCommentScore = (comment, option) => {
    let params = {
        method: 'POST',
        body: JSON.stringify(option),
        headers:headers
    }

    return fetch(`${api}/comments/${comment.id}`, params)
        .then(res =>  res.json())
}