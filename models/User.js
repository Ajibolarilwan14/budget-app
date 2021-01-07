const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: "String",
        require: "please provide your email",
        trim: true
    },
    password: {
        type: "String",
        require: "Please provide a password"
    }
})

module.exports = mongoose.model("User", userSchema);