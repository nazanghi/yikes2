import {CREATE_ACCOUNT, EDIT_ACCOUNT, GET_ACCOUNT, GET_ACCOUNT_BY_USER, GET_ALL_ACCOUNTS} from '../types'
const initialState = {
    currentAccount: {},
    newAccount: {
        user_id: '',
        username: '',
        inputJob: '',
        inputAbout: ''
    }
}
const AccountReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ACCOUNT:
            return {...state, newAccount: action.payload}
        case GET_ACCOUNT:
            return {...state, accounts: action.payload}
        case GET_ACCOUNT_BY_USER:
            return {...state, accounts: action.payload}
        case GET_ALL_ACCOUNTS:
            return {...state}
        case EDIT_ACCOUNT:
            return {...state, newAccount: action.payload}
        default:
            return {...state}
    }
}
export default AccountReducer