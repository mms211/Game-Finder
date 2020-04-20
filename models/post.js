const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postType: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  responses: {
    type: String,
    enum: true
  }
},
{
    toJSON: {
      virtuals: true
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;