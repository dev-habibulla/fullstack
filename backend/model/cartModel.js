const mongoose = require('mongoose');
const { Schema } = mongoose

const cartSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    cartOwnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    quantity: {
        type: Number,
       
    },
   
})

module.exports = mongoose.model("Cart", cartSchema)