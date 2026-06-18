const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const collegeController = require('../controllers/collegeController');
const application = require('../controllers/applicationController');


router.post('/login',   adminController.adminLogin);
router.get('/users', adminController.getAllUser )
router.post('/addcollege', collegeController.addCollege);
router.get('/collegelist', collegeController.getCollege);
router.get("/application", application.applications);

// router.get('/application', )
// router.get('/college/:id', collegeController.getCollege);


module.exports = router;
