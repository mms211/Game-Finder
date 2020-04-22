const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const PostController = require('../controllers/PostController.js');
const authenticate = require('../controllers/Authentication.js');
const isAuthorized = require('../bin/isAuthorized');

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

// update:
router.put('/users/update', isAuthorized, UserController.updateUser);

// delete:
router.delete('/users/delete/:id', isAuthorized, UserController.deleteById);

// ==== post CRUD ====

// create:
router.post('/posts/add', PostController.addPost);

// read:
router.get('/posts/all', PostController.findAll);
router.get('/posts/:id', PostController.findById);

// update:
router.put('/posts/update', isAuthorized, PostController.updatePost);

// delete:
router.delete('/posts/delete/:id', isAuthorized, PostController.deleteById);

// ======== AUTHENTICATION ========

router.post('/authenticate', authenticate);

module.exports = router;