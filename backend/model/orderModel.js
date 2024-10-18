const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  tran_id: {
    type: String,
    require: true,
    unique: true,
  },
  amount: {
    type: String,
    require: true,
  },
  cus_name: {
    type: String,
    require: true,
  },

  cus_email: {
    type: String,
    require: true,
  },
  cus_add1: {
    type: String,
    require: true,
  },
  cus_add2: {
    type: String,
    require: true,
  },
  cus_city: {
    type: String,
    require: true,
  },
  cus_state: {
    type: String,
    require: true,
  },
  cus_postcode: {
    type: String,
    require: true,
  },
  cus_phone: {
    type: String,
    require: true,
  },

  orderOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
//   cartId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Cart",
//   },
});

module.exports = mongoose.model("Order", orderSchema);
