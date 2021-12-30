const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    designation : {
        type: String,
        required : true,
    },
    education : {
        type: String,
        required : true,
    },
    companyName : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        unique:true
    },
    mobile : {
        type: String,
        required : true,
        unique:true
    },
    streetAddress : {
        type: String,
    },
    city : {
        type: String,
    },
    state : {
        type: String,
    },
    country : {
        type: String,
    },
    aboutCompany : {
        type: String,
    },
    clients : {
        type: String,
    },
    products : {
        type: String,
    },
    services : {
        type: String,
    },
    companyNameSlug : {
        type: String,
    },
},{timestamps:true});

const portfolio = mongoose.model("portfolio",portfolioSchema);

module.exports = portfolio;