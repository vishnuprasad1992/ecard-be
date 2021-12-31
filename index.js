const express = require("express");
// const cors= require("cors");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv")
const dbConnect = require("./dbConfig/connectDb")
const userRoute = require('./routes/userRoute');
const portfolioRoute = require('./routes/portfolioRoute');

dotenv.config();

const app = express();
dbConnect();
const port = process.env.PORT || 5000;
app.use(morgan("common"));
app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.use("/uploads",express.static(path.join(__dirname,"uploads"))) 

app.use("/api/portfolio",portfolioRoute);
app.use("/api/user",userRoute);
// app.use("/api/posts",postRoute);



app.listen(port,()=>{
    console.log(`server connected on http://localhost:${port}`)
})
