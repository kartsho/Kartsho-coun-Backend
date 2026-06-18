const express = require('express')
const router = express.Router();

const userController = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken")

router.post('/login',  userController.loginUser);
router.post('/register',userController.createUser);
router.get('/profile/:email', verifyToken, userController.getProfile);


module.exports = router;