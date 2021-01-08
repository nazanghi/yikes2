const Router = require('express').Router()
const controller = require('../controllers/TagController')

Router.post('/create', controller.CreateTag) //issues

Router.get('/:reviewId', controller.GetReviewTags) 
Router.get('/allReviews/:categoryId', controller.FetchByCategory)
Router.get('/:categoryId/:reviewId', controller.GetTag)

Router.delete('/:tagId', controller.DeleteTagInstance)

module.exports = Router