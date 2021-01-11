const Router = require("express").Router()
const controller = require("../controllers/UserController")
const {readToken, verifyJwt} = require("../middleware")

// Router.post("/register", controller.CreateUser) //good, but commented out because of login issues
// Router.post("/login", controller.LoginUser) //issues
Router.post("/register", controller.DummyCreate) //good
Router.post("/login", controller.DummyLogin) //issues

Router.get("/session", readToken, verifyJwt, controller.SessionStatus) 
Router.get("/:user_id", controller.GetUser) //good

module.exports = Router