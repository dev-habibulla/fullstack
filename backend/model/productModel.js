const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    // require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: [String],
  },
  regularprice: {
    type: String,
    // require: true
  },
  saleprice: {
    type: String
  },
  slug: {
    type: String
  },
  stastus: {
    type: String,
    enum: ["waiting", "rejected", "approved"],
    default: "waiting",
},

});

module.exports = mongoose.model("Product", productSchema);
