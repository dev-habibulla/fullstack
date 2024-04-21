const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  
  avatar: {
    type: String,
  },
  regularprice: {
    type: String,
    require: true
  },
  saleprice: {
    type: String
  },
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }
});

module.exports = mongoose.model("Variant", variantSchema);
