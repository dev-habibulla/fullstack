const Variant = require("../model/variantModel");

const createVariantController = async (req, res) => {
  const { name, avatar, regularprice, saleprice, productId } = req.body;

  let existingName = await Variant.findOne({ name: name })

  if (existingName) {
    res.send({ error: "already exists" })
    console.log("already exists");
  } else {
    const variant = new Variant({
      name: name,
      avatar: `/uploads/${req.file.filename}`,
      regularprice: regularprice,
      saleprice: saleprice,
      productId: productId
    });
    variant.save();
  }


};

module.exports = createVariantController;
