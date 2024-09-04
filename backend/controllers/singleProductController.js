let Product = require("../model/productModel");

let singleProductController = async (req, res) => {
  let slug = req.params.slug;

  let singlePro = await Product.find({ slug: slug });

  res.send(singlePro);
};

module.exports = singleProductController;
