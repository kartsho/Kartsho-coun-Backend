const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken')
const application = require('../controllers/applicationController');


router.post("/apply", verifyToken, application.applyForCounselling );
module.exports = router;