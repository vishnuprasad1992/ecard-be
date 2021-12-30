const portfolios = require('../models/portfolioModel');

const addNewPortfolioDetail = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newPortfolio = await portfolios(data);
            await newPortfolio.save();
            resolve(newPortfolio)
        } catch (error) {
            reject(error.message)
        }
    })
}
const getPortfolioSingle = (companyName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const portfolio = await portfolios.findOne({companyNameSlug:companyName});
            resolve(portfolio)
        } catch (error) {
            reject(error.message)
        }
    })
}


module.exports = {
    addNewPortfolioDetail,
    getPortfolioSingle
}