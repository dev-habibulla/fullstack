const mongoose = require('mongoose');
const { Schema } = mongoose

const catSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    stastus: {
        type: String,
        enum: ["waiting", "rejected", "approved"],
        default: "waiting",
    },
    subcatList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
    }],

})

module.exports = mongoose.model("Category", catSchema)