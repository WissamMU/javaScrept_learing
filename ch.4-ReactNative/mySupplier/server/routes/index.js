const express = require('express');
const userController = require('../controllers/userController');
const {userValidatorRules, validate} = require('../middlewares/validator')
const isLoggedIn = require('../middlewares/auth')
const supplierController = require('../controllers/supplierController');

const router = express.Router();

router.get('/', function (req, res) {
    res.json({ messag: "Hello, world!" });
})

// user routes
router.post("/account/signup", userValidatorRules(), validate,  userController.register);
router.post("/account/login" , userController.login)
router.get("/account/me", isLoggedIn, userController.me)
router.get("/account/profile", isLoggedIn, userController.getProfile)
router.post("/account/update", isLoggedIn, userController.updateProfile)// take current user id and update profile
router.post("/account/delete", isLoggedIn, userController.deleteProfile)// take current user id and delete profile


router.get("/supplier", supplierController.index)

module.exports = router;