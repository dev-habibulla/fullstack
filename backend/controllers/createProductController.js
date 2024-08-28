const Product = require("../model/productModel");

const createProductController = async (req, res) => {
  const { name, description, image, regularprice, saleprice, slug } = req.body;

  let existingName = await Product.findOne({ name: name });

  if (existingName) {
    res.send({ error: "already exists" });
    console.log("already exists");
  } else {


    let arr=[]

    req.files.map(item=>{
      arr.push(`/uploads/${item.filename}`)
    })

    
    
    const product = new Product({
      name: name,
      description: description,
      image: arr,
      regularprice: regularprice,
      saleprice: saleprice,
      slug: slug,
    });
    product.save();



  }
};

module.exports = createProductController;
