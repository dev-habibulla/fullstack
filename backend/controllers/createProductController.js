const Product = require("../model/productModel");

const createProductController = async (req, res) => {
  const { name, description, image } = req.body;

  const product = new Product({
    name: name,
    description: description,
    image: image,
  });
  product.save();
};

module.exports = createProductController;
