const Router = require("express").Router()
const controller = require("../controllers/AccountController")

Router.post("/create", controller.CreateAccount) //good
Router.get("/all", controller.GetAllAccounts) //good
Router.get("/user/:userId", controller.GetAccountByUserId) //issues
Router.get("/:accountId", controller.GetOneAccount) //returns null for account instead of actually sending the account
Router.post("/:accountId", controller.EditAccount) //good

module.exports = Router