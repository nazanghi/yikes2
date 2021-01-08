import {CREATE_ACCOUNT, GET_ACCOUNT, GET_ALL_ACCOUNTS, EDIT_ACCOUNT, GET_ACCOUNT_BY_USER} from '../types'
import {__CreateAccount, __EditAccount, __GetAccount, __GetAccountByUserId, __GetAllAccounts} from '../../services/AccountServices'
export const CreateAccount = (formData) => async (dispatch) => {
    try {
        let response = await __CreateAccount(formData)
        dispatch({
            type: CREATE_ACCOUNT,
            payload: response
        })
        console.log('AccountActions, CreateAccount hits')
    } catch (error) {
        console.log('AccountActions, CreateAccount fails')
        throw error
    }
}
export const GetAccount = (accountId) => async (dispatch) => {
    try {
        let response = await __GetAccount(accountId)
        dispatch({
            type: GET_ACCOUNT,
            payload: response
        })
        console.log('AccountActions, GetAccount hits')
    } catch (error) {
        console.log('AccountActions, GetAccount fails')
        throw error
    }
}
export const GetAccountByUserId = (userId) => async (dispatch) => {
    try {
        let response = await __GetAccountByUserId(userId)
        dispatch({
            type: GET_ACCOUNT_BY_USER,
            payload: response
        })
        console.log('AccountActions, GetAccountByUserId hits')
    } catch (error) {
        throw error
    }
}
export const GetAllAccounts = () => async (dispatch) => {
    try {
        let response = await __GetAllAccounts()
        dispatch({
            type: GET_ALL_ACCOUNTS,
            payload: response
        })
        console.log('AccountActions, GetAllAccounts hits')
    } catch (error) {
        console.log('AccountActions, GetAllAccounts fails')
        throw error
    }
}
export const EditAccount = (accountId) => async (dispatch) => {
    try {
        let response = await __EditAccount(accountId)
        dispatch({
            type: EDIT_ACCOUNT,
            payload: response
        })
        console.log('AccountActions, EditAccount hits')
    } catch (error) {
        console.log('AccountActions, EditAccount fails')
        throw error
    }
}
 