const express = require("express")
const _ = express.Router()
const authRouth=require("./authRoute")

_.use("/auth",authRouth)
 

module.exports = _