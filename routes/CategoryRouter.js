const Router = require("express").Router()
const controller = require('../controllers/CategoryController')

Router.post('/create', controller.CreateCategory) //good
Router.get('/categories', controller.GetAllCategories) //good but could rename
Router.get('/:categoryId', controller.GetOneCategory) //good
// Router.get('/:categoryName', controller.GetCategoryIdByName) //not sure if this is necessary

module.exports = Router