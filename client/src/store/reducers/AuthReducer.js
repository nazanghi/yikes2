import {CHANGE_EMAIL_INPUT, CHANGE_PASSWORD_INPUT} from '../types/AuthTypes'


const initialState = {
    inputEmail: '',
    inputPassword: ''
}
const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_EMAIL_INPUT:
            return {...state, inputEmail: action.payload}
        case CHANGE_PASSWORD_INPUT:
            return {...state, inputPassword: action.payload}
        default:
            return {...state}
    }
}
export default AuthReducer