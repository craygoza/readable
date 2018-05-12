import {RECEIVE_CATEGORIES, REQUEST_CATEGORIES, SET_CATEGORY_FILTER} from "./actionTypes";
import * as ReadableAPI from "../util/ReadableAPI";

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