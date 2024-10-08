const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    otp: {
        type: String,
    },
    isEmailVerified: {
        type: Boolean,
        default:false
    },
    role: {
        type: String,
        enum: ["user", "marchant", "admin","affiliate"],
        default: "user"
    }
})

module.exports = mongoose.model("User", userSchema)