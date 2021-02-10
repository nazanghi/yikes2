import {CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_ONE_CATEGORY} from '../types/CategoryTypes'
import {__CreateCategory, __GetAllCategories, __GetCategory} from '../../services/CategoryServices'
export const CreateCategory = (formData) => async (dispatch) => {
    try{
        let response = await __CreateCategory(formData)
        dispatch ({
            type: CREATE_CATEGORY,
            payload: response
        })
        console.log('CategoryActions CreteCategory hits')
    } catch (error) {
        console.log('CategoryActions CreateCategory hits')
        throw error
    }
}
export const GetCategory = (categoryId) => async (dispatch) => {
    try{
        let response = await __GetCategory(categoryId)
        dispatch ({
            type: GET_ONE_CATEGORY,
            payload: response
        })
        console.log('CategoryActions GetCategory hits')
    } catch (error) {
        console.log('CategoryActions GetCategory fails')
        throw error
    }
}
export const GetAllCategories = () => async (dispatch) => {
    try{
        let response = await __GetAllCategories()
        dispatch ({
            type: GET_ALL_CATEGORIES,
            payload: response
        })
        console.log('CategoryActions GetAllCategories hits')
    } catch (error) {
        console.log('CategoryActions GetAllCategories fails')
        throw error
    }
}
 