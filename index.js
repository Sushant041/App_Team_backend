const express = require("express");
const connectToMOngo = require("./Database/db");
const cors = require("cors");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;


connectToMOngo();
//routes
app.use("/api/events", require("./Routes/Events"));


app.listen( port,  () =>{
  console.log(`Server on ${port}`);
})