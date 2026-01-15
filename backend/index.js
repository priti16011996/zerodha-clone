const express  = require('express');
require("dotenv").config();
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(MONGO_URL);
    console.log("Connection Successful to the Database");
});