const { addNewPortfolioDetail, getPortfolioSingle } = require("../helpers/portfolioHelper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const addNewPortfolio = async (req, res) => {
    try {
        const companyNameSlug = req.body.companyName.split(" ").join("")
        const details = {...req.body,companyNameSlug};
        const portfolioDetails = await addNewPortfolioDetail(details)
        console.log(portfolioDetails);
        if (portfolioDetails) {
            return res.status(201).json({
                status: "success",
                message: " Portfolio added successfully"
            })
        } else {
            return res.status(500).json({
                status: "error",
                message: "something went wrong"
            })
        }


    } catch (error) {
        console.log(error)
    }
}
const getPortfolio = async (req, res) => {
    try {
        const {companyName}= req.params
        const portfolioDetails = await getPortfolioSingle(companyName)
        if (portfolioDetails) {
            return res.status(201).json({
                status: "success",
                portfolio:portfolioDetails
            })
        } else {
            return res.status(404).json({
                status: "error",
                message: "Portfolio not found"
            })
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addNewPortfolio,
    getPortfolio
}