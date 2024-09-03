const mongoose = require("mongoose");
const { Schema } = mongoose;

const discountSchema = new Schema({
  cupon: {
    type: String,
    require: true,
    unique: true,
  },

  cupontype: {
    type: String,
    require: true,
  },

  cupontamount: {
    type: Number,
    require: true,
  },
  cuponrange: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Cupon", discountSchema);
