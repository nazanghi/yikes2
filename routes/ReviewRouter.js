const Router = require("express").Router()
const controller = require("../controllers/ReviewController")

Router.post("/create", controller.CreateReview) //good
Router.get("/all", controller.GetAllReviews) //good
Router.get("/:review_id", controller.GetOneReview) //good
Router.get("/user/:account_id", controller.GetReviewsByUser) //good
Router.put("/:review_id", controller.EditReview) //good
Router.delete("/:review_id", controller.DeleteReview) //good

module.exports = Router

