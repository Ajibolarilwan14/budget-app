const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
// const flash = require('connect-flash');
const User = mongoose.model("User");

const validateRegisterInput = require("../validation/register");



exports.register = (req, res) => {
	res.render("register");
}

exports.registerUser = async (req, res) => {
    // const user = await new User(req.body).save();

    // res.redirect("/budget")

	// if (!isValid) return res.status(400).json(errors);
    
    User.findOne({ email: req.body.email }).then(user => {
        const { errors, isValid } = validateRegisterInput(req.body);
        // const errors = [];
        if (user) {
            errors.push("Email already exist");
            return res.status(400).json(errors);
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: 200,
                r: "pg",
                d: "mm"
            });

            const myFunction = async () => {
                bcrypt.hash(req.body.password, 8);

                const newUser = await new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    avatar
                });

                newUser
                    .save()
                    .then(user => res.json({msg: "User Created Successfully, please login to continue"}))
                    .catch(err => console.log(err));
                res.redirect("/budget");
            }
        }
		

    });

}

// const myFunction = async () => {
// 	const password = 'ridwan';
// 	const hashPassword = await bcrypt.hash(password, 2);

// 	console.log(password);
// 	console.log(hashPassword);
	
	
// }

// myFunction()

// const hashPassword = bcrypt.hash(password, 8);
// console.log(hashPassword);
