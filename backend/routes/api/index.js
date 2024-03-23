const express = require("express")
const _ = express.Router()
const authRouth = require("./authRoute")
const productRoute = require("./productRoute")

_.use("/auth", authRouth)
_.use("/product", productRoute)


module.exports = _