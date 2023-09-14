const mongoose = require("mongoose");
require('dotenv').config();

const password = process.env.PASSWORD;

const mongo_url = `mongodb+srv://grtsushant:${process.env.PASSWORD}@cluster0.bjfldye.mongodb.net/?retryWrites=true&w=majority`


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

module.exports = connectToMOngo;