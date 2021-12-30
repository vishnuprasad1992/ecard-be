const express = require("express");
const { addNewPortfolio, getPortfolio } = require("../controllers/portfolioController");
const router = express.Router();

router.post("/add-portfolio",addNewPortfolio)
router.get("/:companyName",getPortfolio)
// router.post("/login",loginUser)
// router.get("/get-all-users",getAllUsers)




module.exports = router