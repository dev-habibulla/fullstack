
let SubCategory = require("../model/subCatmodel");

let allSubCatControlar = async (req, res) => {


    let allSubCat = await SubCategory.find()

    res.send(allSubCat)


};

module.exports = allSubCatControlar;