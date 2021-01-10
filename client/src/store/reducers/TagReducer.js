import {CREATE_TAG, GET_TAG, GET_REVIEW_TAGS, FETCH_BY_CATEGORY, DELETE_TAG_INSTANCE} from '../types'

const initialState = {
    tags: [],
    newTag: {
        review_id: '',
        category_id: ''
    }
}
const TagReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TAG:
            return {...state, tags: [...state.tags, action.payload]}
        case GET_TAG:
            return {...state, tags: action.payload}
        case FETCH_BY_CATEGORY:
            return {...state}
        case GET_REVIEW_TAGS:
            return {...state}
        case DELETE_TAG_INSTANCE:
            return {...state} //need to review movie lab to incorporate thunk
        default:
            return {...state}
    }   
}

export default TagReducer