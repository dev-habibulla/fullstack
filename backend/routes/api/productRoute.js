const express = require("express");
const multer = require("multer");
const createCategoryControlar = require("../../controllers/createCategoryControlar");
const createSubCategoryControlar = require("../../controllers/createSubCategoryControlar");
const allCatControlar = require("../../controllers/allCatControlar");
const allSubCatControlar = require("../../controllers/allSubCatControlar");
const createProductController = require("../../controllers/createProductController");
const allProductContoller = require("../../controllers/allProductContoller");
const createVariantController = require("../../controllers/createVariantController");
const singleCategoryContoller = require("../../controllers/singleCategory");
const cartControlar = require("../../controllers/cartController");
const allCartContoller = require("../../controllers/allcart");
const cuponControlar = require("../../controllers/cuponControlar");
const singleProductController = require("../../controllers/singleProductController");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
    console.log(file);
  },
});

const upload = multer({ storage: storage });

const _ = express.Router();

_.post("/createcategory", createCategoryControlar);
_.post("/createsubcategory", createSubCategoryControlar);
_.post("/createproduct", upload.array('photos', 12), createProductController);
// _.post("/createproduct", upload.single("avatar"), createProductController);
_.post("/createvariant", upload.single("avatar"), createVariantController);
_.post("/createcart",  cartControlar);

_.post("/createcupon", cuponControlar);

_.get("/allcat", allCatControlar);
_.get("/allsubcat", allSubCatControlar);
_.get("/allproduct", allProductContoller);
_.get("/singlecategory", singleCategoryContoller);
_.get("/allcart", allCartContoller);

_.get("/singleproduct/:slug", singleProductController);

module.exports = _;
