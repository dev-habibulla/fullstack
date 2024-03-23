const express = require("express")
const createCategoryControlar = require("../../controllers/createCategoryControlar")
const createSubCategoryControlar = require("../../controllers/createSubCategoryControlar")
const allCatControlar = require("../../controllers/allCatControlar")
const allSubCatControlar = require("../../controllers/allSubCatControlar")

const _ = express.Router()

_.post("/createcategory", createCategoryControlar)
_.post("/createsubcategory", createSubCategoryControlar)

_.get("/allcat", allCatControlar)
_.get("/allsubcat", allSubCatControlar)



module.exports = _