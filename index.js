const express = require("express");
const connectToMOngo = require("./Database/db");
const cors = require("cors");
require('dotenv').config();


connectToMOngo();
const app = express();

const port = process.env.PORT;


app.listen( port,  () =>{
  console.log(`Server on ${port}`);
})