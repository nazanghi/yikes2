import {CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_ONE_CATEGORY} from '../types'
const initialState = {
    categories: [],
    newCategory: ""
}
const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]}
        case GET_ONE_CATEGORY:
            return {...state, newCategory: action.payload}
        case GET_ALL_CATEGORIES:
            return {...state}
        default:
            return {...state}
    }
}
export default CategoryReducer