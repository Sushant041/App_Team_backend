const express = require("express");
const connectToMongo = require("./Database/db");
const cors = require("cors");
const teamrouter = require("./Routes/TeamRoutes")
require('dotenv').config();


connectToMongo();
const app = express();
app.use(cors());
app.use(express.json());

// app.get("/", (req, res)=>{
//   res.send({message: "hii"});
// })
app.use("/team", teamrouter);
const port = process.env.PORT;


app.listen( port, () =>{
  console.log(`Server on ${port}`);
})