const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secrectValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');



let forgotPassEmailController = async (req, res) => {
    const { email } = req.body;

    let findEmail = await User.findOne({ email: email });

    if (findEmail) {

        var token = jwt.sign({ email: email }, "shhhhh");

        console.log(token);
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
            subject: "Password Change  ", // Subject line
            html: `<a href="http://localhost:5173/changepass/${token}">Click for Change Password</a>`// html body
        });




        res.send({ success: "Link Send" });


    }
};

module.exports = forgotPassEmailController;
