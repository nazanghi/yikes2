import {GET_USER, LOGOUT_USER, CREATE_USER} from '../types'
import {__LoginUser, __CheckSession, __CreateUser} from '../../services/UserServices'
export const getUser = (formData) => async(dispatch) => {
    try {
        let response = await __LoginUser(formData)
        console.log('UserActions: getUser hits')
        dispatch({
            type: GET_USER,
            payload: response
        })
    } catch (error){
        console.log('UserActions: getUser fails')
        throw error
    }
}
export const createUser = (formData) => async(dispatch) => {
    try {
        let response = await __CreateUser(formData)
        console.log('UserActions: createUser hits')
        dispatch({
            type: CREATE_USER,
            payload: response
        })
    } catch (error){
        console.log('UserActions: createUser fails')
        throw error
    }
}
export const LogOutUser= () => ({
    type: LOGOUT_USER,
    payload: {}
})
 