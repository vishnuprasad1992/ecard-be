const express = require("express");
const { registerNewUser, loginUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

router.post("/register",registerNewUser)
router.post("/login",loginUser)
router.get("/get-all-users",getAllUsers)




module.exports = router