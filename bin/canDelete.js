/**
 * Allows the owner of a post to delete said post, and returns unauthorized if not.
 */

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SIGNATURE;
const Post = require('../models/Post');

const canDelete = (req, res, next) => {
  const token = req.cookies.token;
  // get the Id of the post
  const componentId = req.params.id;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        // get user Id from token
        req.id = decoded.id;
        Post.findOne({ _id: componentId }, (err, post) => {
          if (err) {
            res.status(500).json({ error: err });
          }
          if (!post) {
            res.status(500).json({ error: "Post not found" });
          }
          if (post.userId === req.id) {
            next();
          }
        })
      }
    });
  }
}

module.exports = canDelete;