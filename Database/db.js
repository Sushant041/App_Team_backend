const mongoose = require("mongoose");
require('dotenv').config();

const password = process.env.PASSWORD;

const mongo_url = `mongodb+srv://karangill1810:Notification%4097@cluster0.ipzbkbg.mongodb.net/`


const connectToMOngo = async() =>{

    try {
        const connect = await mongoose.connect(mongo_url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log(`connected to mongo`);
    } 
    catch (error) {
        console.log("Error connecting to mongodb", error);
    }

} 

module.exports = connectToMongo;