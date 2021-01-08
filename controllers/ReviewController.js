const {Review} = require('../models')


const CreateReview = async (request, response) => {
    try{
        const body = request.body
        const review = await Review.create(body)
        console.log('CreateReview hits. body: ', body)
        response.send(review)
    }catch(error){
        console.log('CreateReview fails')
        throw error
    }
}
 
const GetOneReview = async (request, response) => {
    try{
        const fetchedReview = await Review.findByPk(request.params.review_id)
        response.send(fetchedReview)
        console.log('GetOneReview hits. Fetched Review: ', fetchedReview)
    }catch(error){
        console.log('GetOneReview fails')
        throw error
    }
}
 
const GetAllReviews = async (request, response) => {
    try{
        const allReviews = await Review.findAll()
        response.send(allReviews)
        console.log('GetAllReviews hits')
    }catch(error){
        console.log('GetAllReviews fails')
        throw error
    }
}
 
const EditReview = async (request, response) => {
    try{
        let reviewId = parseInt(request.params.review_id)
        let reviewDetails = request.body
        let editedReview = await Review.update(reviewDetails, {
            where: {id: reviewId}
        })
        response.send(editedReview)
        console.log('EditReview hits, reviewDetails: ', reviewDetails)
    }catch(error){
        console.log('.Review fails')
        throw error
    }
}
 
const DeleteReview = async (request, response) => {
    try{
        let reviewId = parseInt(request.params.review_id)
        await Review.destroy({
            where: {
                id: reviewId
            }
        })
        console.log('DeleteReview hits, DeletedReview:', reviewId)
        response.send({message: `Deleted Review with id: ${reviewId}`})
    }catch(error){
        console.log('DeleteReview fails')
        throw error
    }
}

const GetReviewsByUser = async (request, response) => {
    try{
        const userId = request.params.account_id;
        const userReviews = await Review.findAll({
            where: {account_id: userId}
        })
        console.log('GetReviewsByUser hits')
        response.send(userReviews)
    }catch(error){
        console.log('GetReviewsByUser fails XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        throw error
    }
}
module.exports = {
    CreateReview,
    GetOneReview,
    GetAllReviews,
    GetReviewsByUser,
    EditReview,
    DeleteReview
}


// 888888 888888 8b    d8 88""Yb 88        db    888888 888888 
//   88   88__   88b  d88 88__dP 88       dPYb     88   88__   
//   88   88""   88YbdP88 88"""  88  .o  dP__Yb    88   88""   
//   88   888888 88 YY 88 88     88ood8 dP""""Yb   88   888888 


// const Review = async (request, response) => {
//     try{

//         console.log('.Review hits')
//     }catch(error){
//         console.log('.Review fails')
//         throw error
//     }
// }
 