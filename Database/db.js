const mongoose = require("mongoose");
require('dotenv').config();

const password = process.env.PASSWORD;

const mongo_url = `mongodb+srv://karangill1810:Notification%4097@cluster0.ipzbkbg.mongodb.net/`


const connectToMongo = async() =>{

    const connect = await mongoose.connect(mongo_url);

    if(connect){
        console.log("Connnected to mongodb");
    }
}

module.exports = connectToMongo;