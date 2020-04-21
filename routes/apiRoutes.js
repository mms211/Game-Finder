var express = require('express');
var router = express.Router();
// const UserController = require('../models/controllers/userDB.controller.js');
// const PostController = require('../models/controllers/postDB.controller.js');

// root directory == "/api/"

router.get('/admin', function (req, res, next) {
  res.json({
    success: true,
    client_id: process.env.BGA_CLIENT_ID,
    client_secret: process.env.BGA_CLIENT_SECRET
  });
});

/* ======== To be wired up once the controllers are done ========

// ==== user CRUD ====
  
// create:
router.post('/users/add', UserController.addUser);

// read:
router.get('/users/all', UserController.findAll);
router.get('/users/find/:id', UserController.findById);

// update:
router.put('/users/update', UserController.update);

// delete:
router.delete('/users/delete/:id', UserController.deleteById);

// ==== post CRUD ====

// create:
router.post('/posts/add', PostController.addPost);

//read:
router.get('/posts/all', PostController.findAll);
router.get('/posts/:id', PostController.findById);

// update:
router.put('/posts/update', PostController.update);

// delete:
router.delete('/posts/delete/:id', PostController.delete);

*/

module.exports = router;
