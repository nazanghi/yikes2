import { CHANGE_PASSWORD_INPUT } from "../types";
import {CHANGE_EMAIL_INPUT, CHANGE_PASSWORD_INPUT} from '../types'
export const changeEmailInput = (email) => ({
    type: CHANGE_EMAIL_INPUT,
    payload: email
})
export const changePasswordInput = (password) => ({
    type: CHANGE_PASSWORD_INPUT,
    payload: password
})
 