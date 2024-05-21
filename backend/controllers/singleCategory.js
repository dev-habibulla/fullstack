
let Subcategory = require("../model/subCatmodel")

let singleCategoryContoller = async (req, res) => {


    let singleCategory = await Subcategory.find({categoryId:req.query.slug}).populate("ownerId")

    res.send(singleCategory)


};

module.exports = singleCategoryContoller;