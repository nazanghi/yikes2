const Router = require("express").Router()
const controller = require("../controllers/UserController")
const {readToken, verifyJwt} = require("../middleware")

Router.post("/register", controller.CreateUser) //good
Router.post("/login", controller.LoginUser) //issues

Router.get("/session", readToken, verifyJwt, controller.SessionStatus) 
Router.get("/:user_id", controller.GetUser) //good

module.exports = Router