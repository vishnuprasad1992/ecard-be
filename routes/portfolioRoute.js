const express = require("express");
const { addNewPortfolio, getPortfolio } = require("../controllers/portfolioController");
const checkLogin = require("../middlewares/portfolio");
const router = express.Router();

router.post("/add-portfolio",checkLogin,addNewPortfolio)
router.get("/:companyName",getPortfolio)
// router.post("/login",loginUser)
// router.get("/get-all-users",getAllUsers)




module.exports = router