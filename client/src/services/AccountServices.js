import ApiClient from './ApiServices'
export const __CreateAccount = async (formData) => {
    try{
        const response = await ApiClient.post(`/account/create`, formData)
        console.log('__CreateAccount hits')
        return response
    } catch (error) {
        console.log('__CreateAccount fails')
        throw error
    }
}
export const __GetAccount = async (accountId) => {
    try{
        const response = await ApiClient.get(`/account/${accountId}`)
        console.log('__GetAccount hits')
        return response
    } catch (error) {
        console.log('__GetAccount fails')
        throw error
    }
}
export const __GetAccountByUserId = async (userId) => {
    try{
        const response = await ApiClient.get(`/account/${userId}`)
        console.log('__GetAccountByUserId hits')
        return response
    } catch (error) {
        console.log('__GetAccountByUserId fails')
        throw error
    }
}
export const __GetAllAccounts = async () => {
    try{
        const response = await ApiClient.get(`/account/all`)
        console.log('__GetAllAccounts hits')
        return response
    } catch (error) {
        console.log('__GetAllAccounts fails')
        throw error
    }
}
export const __EditAccount = async (accountId, formData) => {
    try{
        const response = await ApiClient.post(`/account/${accountId}`, formData)
        console.log('__EditAccount hits')
        return response
    } catch (error) {
        console.log('__EditAccount fails')
        throw error
    }
}