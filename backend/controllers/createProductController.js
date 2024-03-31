const Product = require("../model/productModel");

const createProductController = async (req, res) => {
  const { name, description, image,regularprice,saleprice,slug } = req.body;

  let existingName = await Product.findOne({ name: name })

  if (existingName) {
    res.send({ error: "already exists" })
    console.log("already exists");
  } else {
    const product = new Product({
      name: name,
      description: description,
      avatar: `/uploads/${req.file.filename}`,
      regularprice:regularprice,
      saleprice:saleprice,
      slug:slug
    });
    product.save();
  }


};

module.exports = createProductController;
