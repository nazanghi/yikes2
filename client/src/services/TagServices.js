import ApiClient from './ApiServices'
export const __CreateTag = async (formData) => {
    try{ 
        const response = await ApiClient.post(`/tag/create`, formData)
        console.log('TagServices, __CreateTag hits')
        return response.data
    }catch (error) {
        console.log('TagServices, __ fails')
        throw error
    }
}
export const __FetchByCategory = async (categoryId) => {
    try{ 
        const response = await ApiClient.get(`/tag/allReviews/${categoryId}`)
        console.log('TagServices, __FetchByCategory hits')
        return response.data
    }catch (error) {
        console.log('TagServices, __FetchByCategory fails')
        throw error
    }
}
export const __GetReviewTags = async (reviewId) => {
    try{ 
        const response = await ApiClient.get(`/tag/${reviewId}`)
        console.log('TagServices, __GetReviewTags hits')
        return response.data
    }catch (error) {
        console.log('TagServices, __GetReviewTags fails')
        throw error
    }
}
export const __GetTag = async (categoryId, reviewId) => {
    try{ 
        const response = await ApiClient.get(`/tag/${categoryId}/${reviewId}`)
        console.log('TagServices, __GetTag hits')
        return response.data
    }catch (error) {
        console.log('TagServices, __GetTag fails')
        throw error
    }
}
export const __DeleteTagInstance = async (tagId) => {
    try{ 
        const response = await ApiClient.delete(`/tag/${tagId}`)
        console.log('TagServices, __DeleteTagInstance hits')
        return response.data
    }catch (error) {
        console.log('TagServices, __DeleteTagInstance fails')
        throw error
    }
}
 