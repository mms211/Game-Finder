const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please enter a valid email address",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    required: "Please enter your password"
  }
},
{
  toJSON: {
    virtuals: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
