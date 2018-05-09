import { SET_CATEGORY_FILTER, RECEIVE_CATEGORIES }  from "../actions/actionTypes";

const categoryFilter = (state = {}, action) => {
    switch (action.type){
        case RECEIVE_CATEGORIES:
            action.categories.push({name: "all", path: "/"})

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