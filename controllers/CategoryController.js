const {Category} = require('../models')

const CreateCategory = async (request, response) => {
    try {
        let categoryDetails = {
            ...request.body
        }
        let newCategory = await Category.create(categoryDetails)
        console.log('CategoryController: CreateCategory hits')
        response.send(newCategory)
    } catch(error){
        console.log('CategoryController: CreateCategory fails')
        throw error
    }
} 
 
const GetOneCategory = async (request, response) => {
    try {
        let category = await Category.findByPk(request.params.categoryId)
        console.log('CategoryController: GetCategory hits. ID: ', category)
        response.send(category)
    } catch(error){
        console.log('CategoryController: GetCategory fails')
        throw error
    }
} 
 
const GetAllCategories = async (request, response) => {
    try {
        let allCategories = await Category.findAll()
        console.log('CategoryController: GetAllCategories hits')
        response.send(allCategories)
    } catch(error){
        console.log('CategoryController: GetAllCategories fails')
        throw error
    }
} 
 
module.exports = {
    CreateCategory,
    GetOneCategory,
    GetAllCategories,
    // GetCategoryIdByName
}

// __/\\\\\\\\\\\\\\\___________________________________________________/\\\\\\________________________________________________        
//  _\///////\\\/////___________________________________________________\////\\\________________________________________________       
//   _______\/\\\____________________________________________/\\\\\\\\\_____\/\\\_______________________/\\\_____________________      
//    _______\/\\\___________/\\\\\\\\_____/\\\\\__/\\\\\____/\\\/////\\\____\/\\\_____/\\\\\\\\\_____/\\\\\\\\\\\_____/\\\\\\\\__     
//     _______\/\\\_________/\\\/////\\\__/\\\///\\\\\///\\\_\/\\\\\\\\\\_____\/\\\____\////////\\\___\////\\\////____/\\\/////\\\_    
//      _______\/\\\________/\\\\\\\\\\\__\/\\\_\//\\\__\/\\\_\/\\\//////______\/\\\______/\\\\\\\\\\_____\/\\\_______/\\\\\\\\\\\__   
//       _______\/\\\_______\//\\///////___\/\\\__\/\\\__\/\\\_\/\\\____________\/\\\_____/\\\/////\\\_____\/\\\_/\\__\//\\///////___  
//        _______\/\\\________\//\\\\\\\\\\_\/\\\__\/\\\__\/\\\_\/\\\__________/\\\\\\\\\_\//\\\\\\\\/\\____\//\\\\\____\//\\\\\\\\\\_ 
//         _______\///__________\//////////__\///___\///___\///__\///__________\/////////___\////////\//______\/////______\//////////__
// const Category = async (request, response) => {
//     try {

//         console.log('CategoryController: .Category hits')
//         response.send()
//     } catch(error){
//         console.log('CategoryController: .Category fails')
//         throw error
//     }
// } 
 