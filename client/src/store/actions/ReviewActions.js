import {CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW, GET_ONE_REVIEW, GET_REVIEWS_BY_USER, GET_ALL_REVIEWS} from '../types'
import {__CreateReview, __EditReview, __GetAllReviews, __GetReviewsByUser, __GetOneReview, __DeleteReview} from '../../services/ReviewServices'
export const CreateReview = (formData) => async (dispatch) => {
    try {
        let response = await __CreateReview(formData)
        dispatch ({
            type: CREATE_REVIEW,
            payload: response
        })
        console.log('ReviewActions, createReview hits')
    } catch (error) {
        console.log('ReviewActions, createReview fails')
        throw error
    }
}
export const DeleteReview = (reviewId) => async (dispatch) => {
    try {
        let response = await __DeleteReview(reviewId)
        dispatch ({
            type: DELETE_REVIEW,
            payload: response
        })
        console.log('ReviewActions, deleteReview hits')
    } catch (error) {
        console.log('ReviewActions, deleteReview fails')
        throw error
    }
}
export const EditReview = (reviewId, formData) => async (dispatch) => {
    try {
        let response = await __EditReview(reviewId, formData)
        dispatch ({
            type: EDIT_REVIEW,
            payload: response
        })
        console.log('ReviewActions, editReview hits')
    } catch (error) {
        console.log('ReviewActions, editReview fails')
        throw error
    }
}
export const getOneReview = (reviewId) => async(dispatch) => {
    try {
        let response = await __GetOneReview(reviewId)
        dispatch ({
            type: GET_ONE_REVIEW,
            payload: response
        })
        console.log('ReviewActions, getOneReview hits')
    } catch (error) {
        console.log('ReviewActions, getOneReview fails')
        throw error
    }
}
export const GetAllReviews = () => async(dispatch) => {
    try {
        let response = await __GetAllReviews()
        dispatch ({
            type: GET_ALL_REVIEWS,
            payload: response
        })
        console.log('ReviewActions, getAllReviews hits')
    } catch (error) {
        console.log('ReviewActions, getAllReviews fails')
        throw error
    }
}
export const GetReviewsByUser = (userId) => async(dispatch) => {
    try {
        let response = await __GetReviewsByUser(userId)
        dispatch ({
            type: GET_REVIEWS_BY_USER,
            payload: response
        })
        console.log('ReviewActions, GetReviewsByUser hits')
    } catch (error) {
        console.log('ReviewActions, GetReviewsByUser fails')
        throw error
    }
}
 