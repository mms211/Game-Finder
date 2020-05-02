const Comment = require('../models/Comment');

module.exports = {
  // ======== CREATE ========
  addComment: (req, res) => {
    const body = req.body;
    // console.log(body);
    if (!body) {
      return res.status(400).json({ success: false, error: 'No comment provided' });
    }
    const comment = new Comment(body);
    if (!comment) {
      return res.status(400).json({ success: false, error: err });
    }
    comment.save()
      .then((result) => {
        return res.status(201).json({
          success: true,
          id: comment._id,
          message: 'Successfully added comment!'
        })
      })
      .catch(err => {
        return res.status(400).json({
          err,
          message: 'Failed to add comment!'
        });
      });
  },
  // ======== READ: ========
  findByPostId: async (req, res) => {
    await Comment.find({
      postId: req.params.id
    }).sort({ createdAt: -1 }).exec((err, comments) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!comments.length) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: comments });
    });
  },
  findById: async (req, res) => {
    await Comment.findOne({ _id: req.params.id }, (err, comment) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!comment) {
        return res.status(404).json({ success: false, error: 'Comment not found!' });
      }
      return res.status(200).json({ success: true, data: comment });
    })
      .catch(err => console.log(err));
  },
  // ======== UPDATE: ========
  updateComment: async (req, res) => {
    const body = req.body
    if (!body) {
      return res.status(400).json({ success: false, error: "You must provide a comment to update" });
    }
    await Comment.findOneAndUpdate(
      { _id: body._id },
      {
        body: body.body,
        updatedAt: Date.now()
      },
      // passing { new: true } assures that the function will return
      // the NEW document and not the old one.
      { new: true }
    )
      .then(update => {
        return res.json({ success: true, comment: update });
      });
  },
  // ======== DELETE ========
  deleteById: async (req, res) => {
    await Comment.findByIdAndDelete(
      { _id: req.params.id },
    )
      .then(result => res.json({ success: true, deleted: result.title }));
  }
};