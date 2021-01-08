import ApiClient from "./ApiServices"
export const __CreateReview = async (formData) => {
    try {
        const response = await ApiClient.post(`/review/create`, formData)
        console.log("ReviewServices, CreateReview hits")
        return response.data
    } catch (error){
        console.log("ReviewServices, CreateReview fails")
        throw error
    }
}
export const __GetOneReview = async (reviewId) => {
    try {
        const response = await ApiClient.get(`/review/${reviewId}`)
        console.log("ReviewServices, GetOneReview hits")
        return response.data
    } catch (error){
        console.log("ReviewServices, GetOneReview fails")
        throw error
    }
}
export const __GetAllReviews = async () => {
    try {
        const response = await ApiClient.get(`/review/all`)
        console.log("ReviewServices, __GetAllReviews hits")
        return response.data
    } catch (error){
        console.log("ReviewServices, __GetAllReviews fails")
        throw error
    }
}
export const __GetReviewsByUser = async (userId) => {
    try {
        const response = await ApiClient.get(`/review/user/${userId}`)
        console.log("ReviewServices, __GetReviewsByUser hits")
        return response.data
    } catch (error){
        console.log("ReviewServices, __GetReviewsByUser fails")
        throw error
    }
}
export const __EditReview = async (reviewId, formData) => {
    try {
        const response = await ApiClient.put(`/review/${reviewId}`, formData)
        console.log("ReviewServices, __EditReview hits")
        return response.data
    } catch (error){
        console.log("ReviewServices, __EditReview fails")
        throw error
    }
}
export const __DeleteReview = async (reviewId) => {
    try {
        const response = await ApiClient.delete(`/review/${reviewId}`)
        console.log("ReviewServices, __DeleteReview hits")
        return response.data
    } catch (error){
        console.log("ReviewServices, __DeleteReview fails")
        throw error
    }
}
// GetReviewsByUser,
// EditReview,
// DeleteReview
//  /__  ___/ //   / /  /|    //| |     //   ) ) / /        // | |  /__  ___/ //   / / 
//    / /    //____    //|   // | |    //___/ / / /        //__| |    / /    //____    
//   / /    / ____    // |  //  | |   / ____ / / /        / ___  |   / /    / ____     
//  / /    //        //  | //   | |  //       / /        //    | |  / /    //          
// / /    //____/ / //   |//    | | //       / /____/ / //     | | / /    //____/ /    
// export const __.Review = async () => {
//     try {
//         const response = await ApiClient.CRUD(`/review/`)
//         console.log("ReviewServices, .Review hits")
//         return response.data
//     } catch (error){
//         console.log("ReviewServices, .Review fails")
//         throw error
//     }
// }