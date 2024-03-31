
let Product = require("../model/productModel")

let allProductContoller = async (req, res) => {


    let allProduct = await Product.find()

    res.send(allProduct)


};

module.exports = allProductContoller;