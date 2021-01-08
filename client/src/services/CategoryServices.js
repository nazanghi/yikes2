import ApiClient from './ApiServices'
export const __CreateCategory = async (formData) => {
    try {
        const response = await ApiClient.post(`/category/create`, formData)
        console.log('Category Services: __CreateCategory hits, category title: ', formData)
        return response.data
    } catch(error){
        console.log('Category Services: __CreateCategory fails, title: ', formData)
        throw error
    }
}
export const __GetCategory = async (categoryId) => {
    try {
        const response = await ApiClient.get(`/category/${categoryId}`)
        console.log('Category Services: __GetCategory hits')
        return response.data
    } catch(error){
        console.log('Category Services: __GetCategory fails')
        throw error
    }
}
export const __GetAllCategories = async () => {
    try {
        const response = await ApiClient.CRUD(`/category/categories`)
        console.log('Category Services: __GetAllCategories hits')
        return response.data
    } catch(error){
        console.log('Category Services: __GetAllCategories fails')
        throw error
    }
}
 