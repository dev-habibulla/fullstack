const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
