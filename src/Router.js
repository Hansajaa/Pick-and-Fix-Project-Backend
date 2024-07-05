const express = require('express');
const router = express.Router();
const encryptPw = require('./middleware/encrypt');
const userController = require('./controllers/UserController');


router.post('/registerUser', encryptPw, userController.insertUser.bind(this));
router.post('/checkUsername', userController.checkUsername.bind(this));

module.exports = router;