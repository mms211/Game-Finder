const Post = require('../models/Post');

module.exports = {
  // ======== CREATE ========
  addPost: (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({ success: false, error: 'No post provided' });
    }
    const post = new Post(body);
    if (!post) {
      return res.status(400).json({ success: false, error: err });
    }
    post.save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: post._id,
          message: 'Successfully added post!'
        })
      })
      .catch(err => {
        return res.status(400).json({
          err,
          message: 'Failed to add post!'
        });
      });
  },
  // ======== READ: ========
  findAll: async (req, res) => {
    await Post.find({}).sort({ createdAt: -1 }).exec((err, posts) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!posts.length) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: posts });
    })
      .catch(err => console.log(err));
  },
  findById: async (req, res) => {
    await Post.findOne({ _id: req.params.id }, (err, post) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!post) {
        return res.status(404).json({ success: false, error: 'Post not found!' });
      }
      return res.status(200).json({ success: true, data: post });
    })
      .catch(err => console.log(err));
  },
  // ======== UPDATE: ========
  updatePost: async (req, res) => {
    const body = req.body
    if (!body) {
      return res.status(400).json({ success: false, error: "You must provide a post to update" });
    }
    await Post.findOneAndUpdate(
      { _id: body._id },
      {
        postType: body.postType,
        title: body.title,
        body: body.body,
        responses: body.responses,
        updatedAt: Date.now()
      },
      // passing { new: true } assures that the function will return
      // the NEW document and not the old one.
      { new: true }
    )
      .then(update => {
        return res.json({ success: true, post: update });
      });
  },
  // ======== DELETE ========
  deleteById: async (req, res) => {
    await Post.findByIdAndDelete(
      { _id: req.params.id },
    )
      .then(result => res.json({ success: true, deleted: result.title }));
  }
}