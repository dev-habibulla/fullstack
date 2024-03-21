const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secrectValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");


let loginControler = async (req, res) => {
    const { email, password } = req.body;

    let findEmail = await User.findOne({ email: email });

    if (findEmail) {
        // if (!findEmail.isEmailVerified && findEmail.otp == otp) {
        //     await User.findOneAndUpdate(
        //         { email: email },
        //         { otp: "", isEmailVerified: true }
        //     );
        //     res.send({ success: "otp match" });
        // } else {
        //     res.send({ error: "otp not match" });
        // }
        bcrypt.compare(password, findEmail.password, function (err, result) {
            console.log(result);
            // result == true
            if (result) {
                res.send({
                    username: findEmail.username,
                    email: findEmail.email,
                    role: findEmail.role,
                    isEmailVerified: findEmail.isEmailVerified,
                });
            } else {
                res.send({
                    error: "Credential Invalid",
                });
            }
        });

    } else {
        res.send({
            error: "Credential Invalid",
        });
    }
};

module.exports = loginControler;