import {GET_USER, LOGOUT_USER, CREATE_USER} from '../types/UserTypes'
const initialState = {
    userInfo: {},
    authenticated: false
}
const UserReducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_USER:
            return{...state, userInfo: action.payload}
        case CREATE_USER:
            return{...state, userInfo: action.payload}
        case LOGOUT_USER:
            return {...state, userInfo: action.payload}
        default:
            return {...state}    
    }
}
export default UserReducer