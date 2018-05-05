import { SET_CATEGORY_FILTER, RECEIVE_CATEGORIES }  from "../actions";

const categoryFilter = (state = {}, action) => {
    switch (action.type){
        case RECEIVE_CATEGORIES:
          return {
              ...state,
              categories: action.categories
          };
        case SET_CATEGORY_FILTER:
            return {...state,
                    filter: action.filter
            };
        default:
            return state
    }
}

export default categoryFilter