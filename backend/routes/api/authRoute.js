const express = require("express")
const secureApi = require("../../middleware/secureApi")
const registrasionController =require("../../controllers/registrasionController")
// const registrasionController = require("../../controllers/registrasionController")
const _ = express.Router()

_.post("/registrasion", secureApi, registrasionController)


module.exports = _