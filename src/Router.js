const express = require('express');
const router = express.Router();
const userController = require('./controllers/UserController');


router.post('/registerUser', userController.insertUser.bind(this));
router.post('/checkUsername', userController.checkUsername.bind(this));

module.exports = router;