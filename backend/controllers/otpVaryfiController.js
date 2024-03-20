const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secrectValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

let otpVaryfiController = async (req, res) => {
    const { email, otp } = req.body;

    let findEmail = await User.findOne({ email: email });

    if (findEmail) {
        if (!findEmail.isEmailVerified && findEmail.otp == otp) {
            await User.findOneAndUpdate(
                { email: email },
                { otp: "", isEmailVerified: true }
            );
            res.send({ success: "otp match" });
        } else {
            res.send({ error: "otp not match" });
        }
    }
};

module.exports = otpVaryfiController;
