const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    unique: true,
    required: true
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;