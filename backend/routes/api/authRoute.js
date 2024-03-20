const express = require("express")
const secureApi = require("../../middleware/secureApi")
const registrasionController = require("../../controllers/registrasionController")
const otpVaryfiController = require("../../controllers/otpVaryfiController")
const forgotPassEmailController = require("../../controllers/forgotPassEmailController")
const changeController = require("../../controllers/ChangeControlar")
const loginControler = require("../../controllers/loginControler")
// const registrasionController = require("../../controllers/registrasionController")
const _ = express.Router()

_.post("/registrasion", secureApi, registrasionController)
_.post("/login", secureApi, loginControler)
_.post("/otpVarification", otpVaryfiController)
_.post("/forgotpassemail", forgotPassEmailController)
_.post("/changepass", changeController)


module.exports = _