
let Cart = require("../model/cartModel")

let allCartContoller = async (req, res) => {


    let allCart = await Cart.find().populate("productId")

    res.send(allCart)


};

module.exports = allCartContoller;