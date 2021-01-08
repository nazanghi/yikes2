const Router = require("express").Router()
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')
const AccountRouter = require("./AccountRouter")
const CategoryRouter = require("./CategoryRouter")
const TagRouter = require("./TagRouter")

Router.use("/user", UserRouter)
Router.use("/review", ReviewRouter)
Router.use("/account", AccountRouter)
Router.use("/category", CategoryRouter)
Router.use("/tag", TagRouter)

module.exports = Router