import ApiClient from "./ApiServices"
export const __LoginUser = async () => {
    try {
        const response = await ApiClient.post("/user/login", userData)
        localStorage.setItem("token", response.data.token)
        console.log("__LoginUser hits")
        return response
    } catch (error) {
        console.log("__LoginUser fails")
        throw error
    }
}
export const __CreateUser = async () => {
    try {
        const response = await ApiClient.post("/user/register", userData)
        console.log("__CreateUser hits")
        return response.data
    } catch (error) {
        console.log("__CreateUser fails")
        throw error
    }
}
export const __GetUser = async () => {
    try {
        const response = await ApiClient.get(`/user/${userId}`)
        console.log("__GetUser hits")
        return response.data
    } catch (error) {
        console.log("__GetUser fails")
        throw error
    }
}
export const __CheckSession = async () => {
    try {
        const response = await ApiClient.get("/user/session", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log('__CheckSession fails')
        throw error
    }
}
 