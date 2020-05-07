const express = require('express');
const axios = require('axios');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const PostController = require('../controllers/PostController.js');
const CommentController = require('../controllers/CommentController');
const authenticate = require('../controllers/Authentication.js');
const isAuthorized = require('../bin/isAuthorized');
const canDelete = require('../bin/canDelete')
const getCurrentUser = require('../bin/getCurrentUser');

// root directory == "/api/"

router.get('/admin', function (req, res, next) {
  res.json({
    success: true,
    client_id: process.env.BGA_CLIENT_ID,
    client_secret: process.env.BGA_CLIENT_SECRET
  });
});

// ==== user CRUD ====

// create:
router.post('/users/add', UserController.addUser);

// read:
router.get('/users/all', isAuthorized, UserController.findAll);
router.get('/users/find/:id', isAuthorized, UserController.findById);
router.get('/users/current', getCurrentUser)


// update:
router.put('/users/update', isAuthorized, UserController.updateUser);

// delete:
router.delete('/users/delete/:id', isAuthorized, UserController.deleteById);

// ==== post CRUD ====

// create:
router.post('/posts/add', isAuthorized, PostController.addPost);

// read:
router.get('/posts/all', PostController.findAll);
router.get('/posts/:id', PostController.findById);

// update:
router.put('/posts/update', isAuthorized, PostController.updatePost);

// delete:
router.delete('/posts/delete/:id',
  isAuthorized,
  canDelete,
  PostController.deleteById);

// ==== comment CRUD ====

// create:
router.post('/comments/add',
  isAuthorized,
  CommentController.addComment);

// read:
router.get('/comments/:id',
  isAuthorized,
  CommentController.findById);
router.get('/posts/:id/comments',
  isAuthorized,
  CommentController.findByPostId);
router.get('/users/:id/comments',
  isAuthorized,
  CommentController.findByUserId);

// update:
router.put('/comments/update/',
  isAuthorized,
  CommentController.updateComment);

// delete:
router.delete('/comments/delete/:id',
  isAuthorized,
  CommentController.deleteById);

// ======== AUTHENTICATION ========

router.post('/authenticate', authenticate);

router.get('/checkToken', isAuthorized, function (req, res) {
  res.sendStatus(200);
});

// ======== BOARD GAME ATLAS ========

router.put('/search', (req, res) => {
  let { url } = req.body;
  url += '&limit=10&client_id=';
  url += process.env.BGA_CLIENT_ID;
  axios.get(url)
    .then(result => {
      res.json(result.data.games);
    })
    .catch(err => console.log(err));
});

module.exports = router;