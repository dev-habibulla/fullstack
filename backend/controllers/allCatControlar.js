
let Category = require("../model/catModel")

let allCatControlar = async (req, res) => {

   let allCat = await Category.find().populate("subcatList")
//    let allCat = await Category.find().populate("subcatList").populate("ownerId")

    res.send(allCat)

};

module.exports = allCatControlar;