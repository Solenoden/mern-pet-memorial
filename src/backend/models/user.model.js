const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {type: String, required: true},
    emailAddress: {type: String, required: true},
    password: {type: String, required: true},
},
{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);