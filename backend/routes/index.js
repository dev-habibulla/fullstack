const express = require("express")
const _ = express.Router()
const apiRoutes = require("./api")

let apibase = process.env.BASEURLAPI

_.use(apibase, apiRoutes)


_.use(apibase,(req,res)=>res.send("api no "))

module.exports = _