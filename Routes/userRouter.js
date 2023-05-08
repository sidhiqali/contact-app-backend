const express = require('express');
const { userRegister, userLogin, currentUser } = require('../controllers/userController');
const router = express.Router();





router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router.route('/current').get(currentUser)




module.exports = router;