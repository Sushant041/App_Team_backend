const mongoose = require("mongoose");
require('dotenv').config();

const password = process.env.PASSWORD;

const mongo_url = `mongodb+srv://grtsushant:${password}@cluster0.bjfldye.mongodb.net/?retryWrites=true&w=majority`


const connectToMOngo = (mongo_url, ()=>{
    console.log("connected to mongo");
})

module.exports = connectToMOngo;