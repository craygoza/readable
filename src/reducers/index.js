import { combineReducers } from 'redux'
import categoryFilter from "./CategoryFilter";
import commentsReducer from "./CommentsReducer"
import postReducer from "./PostReducer"

const reducerApp = combineReducers({
    categoryFilter, postReducer, commentsReducer
})

export default reducerApp