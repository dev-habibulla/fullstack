const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secrectValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

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
            bcrypt.hash(password, 10, function (err, hash) {
                let user = new User({
                    username: username,
                    email: email,
                    password: hash,
                });
                user.save();
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
