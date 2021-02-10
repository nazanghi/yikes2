import {CREATE_TAG, GET_TAG, GET_REVIEW_TAGS, FETCH_BY_CATEGORY, DELETE_TAG_INSTANCE} from '../types/TagTypes'
import {
    __CreateTag,
    __DeleteTagInstance,
    __GetTag,
    __FetchByCategory,
    __GetReviewTags    
} from '../../services/TagServices'
//MAKE A GET ALL TAGS


export const createTag = (formData) => async (dispatch) => {
    try{
        let response = await __CreateTag(formData)
        dispatch({
            type: CREATE_TAG,
            payload: response
        })
        console.log('TagActions, CreateTag hits')
    } catch(error) {
        console.log('TagActions, CreateTag fails')
        throw error
    }
}
export const deleteTagInstance = (tagId) => async (dispatch) => {
    try{
        let response = await __DeleteTagInstance(tagId)
        dispatch({
            type: DELETE_TAG_INSTANCE,
            payload: response
        })
        console.log('TagActions, deleteTagInstance hits')
    } catch(error) {
        console.log('TagActions, deleteTagInstance fails')
        throw error
    }
}
export const getTag = (tagId) => async (dispatch) => {
    try{
        let response = await __GetTag(tagId)
        dispatch({
            type: GET_TAG,
            payload: response
        })
        console.log('TagActions, getTag hits')
    } catch(error) {
        console.log('TagActions, getTag fails')
        throw error
    }
}
export const fetchByCategory = (categoryId) => async (dispatch) => {
    try{
        let response = await __FetchByCategory(categoryId)
        dispatch({
            type: FETCH_BY_CATEGORY,
            payload: response
        })
        console.log('TagActions, fetchByCategory hits')
    } catch(error) {
        console.log('TagActions, fetchByCategory fails')
        throw error
    }
}
export const getReviewTags = (reviewId) => async (dispatch) => {
    try{
        let response = await __GetReviewTags(reviewId)
        dispatch({
            type: GET_REVIEW_TAGS,
            payload: response
        })
        console.log('TagActions, getReviewTags hits')
    } catch(error) {
        console.log('TagActions, getReviewTags fails')
        throw error
    }
}

// export const .Tag = () => async (dispatch) => {
//     try{
//         let response = await __.Tag()
//         dispatch({
//             type: ,
//             payload: response
//         })
//         console.log('TagActions, Tag hits')
//     } catch(error) {
//         console.log('TagActions, Tag fails')
//         throw error
//     }
// }