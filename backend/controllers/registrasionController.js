const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secrectValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");


let registrasionController = async (req, res) => {
    const { username, email, password } = req.body;

    if (blankInput(username)) {
        res.send({ error: "username require" });
    } else if (blankInput(email)) {
        res.send({ error: "Email require" });
    } else if (!emailValidator(email)) {
        res.send({ error: "Valid Email require" });
    } else if (blankInput(password)) {
        res.send({ error: "Password require" });
    } else if (secrectValidator(password)) {
        res.send({ error: "Password is minimum 6 digit require" });
    } else {
        let exisitgEmail = await User.find({ email: email });

        if (exisitgEmail.length > 0) {
            res.send({ error: `${email}  already exits` });
        } else {

            const otp = otpGenerator.generate(6, {
                lowerCaseAlphabets: false,
                upperCaseAlphabets: false,
                specialChars: false,
            });


            bcrypt.hash(password, 10, async function (err, hash) {
                let user = new User({
                    username: username,
                    email: email,
                    password: hash,
                    otp: otp,
                });
                user.save();


                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    secure: false,
                    auth: {
                        user: "habibullalm3@gmail.com",
                        pass: "uzup xtef avnj ckth",
                    },
                });

                const info = await transporter.sendMail({
                    from: '"Offerpoka" <habibullalm3@gmail.com>', // sender address
                    to: "habibullalm3@gmail.com", // list of receivers
                    subject: "Email Verification ", // Subject line
                    html: `<div style="background-color: #ffffff; border-radius: 8px; padding: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
                    <h2 style="color: #333333; text-align: center;">Email Verification OTP</h2>
                    <h3 style="color: #333333; text-align: center; font-weight: bold;">${otp}</h3>
                </div>` // html body
                });

                res.send({
                    username: user.username,
                    email: user.email,
                    role: user.role,
                });
            });
        }
    }
};

module.exports = registrasionController;
