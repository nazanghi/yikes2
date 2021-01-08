import {CREATE_REVIEW, GET_ONE_REVIEW, GET_REVIEWS_BY_USER, GET_ALL_REVIEWS, EDIT_REVIEW, DELETE_REVIEW} from '../types'
const initialState = {
    reviews: [],
    newReview: {
        inputLocation: '',
        inputTitle: '',
        inputContent: '',
        inputRating: '',
        inputLink: ''
    }
}
const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {...state, reviews: [...state.reviews, action.payload]} 
        case EDIT_REVIEW:
            return {...state, newReview: action.payload} 
        case DELETE_REVIEW: //gotta edit this so it hits the back-end
            return {...state, events:[...state.events.filter((event,index) => index !== action.payload)] } 
        case GET_ONE_REVIEW:
            return {...state, events: action.payload } 
        case GET_ALL_REVIEWS:
            return {...state } 
        case GET_REVIEWS_BY_USER:
            return {...state } 
        default: 
            return {...state}
    }
}
export default ReviewReducer