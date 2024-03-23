
let Category = require("../model/catModel")

let allCatControlar = async (req, res) => {


    let allCat = await Category.find()

    res.send(allCat)


};

module.exports = allCatControlar;