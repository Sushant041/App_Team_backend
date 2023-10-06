const express = require("express");
const connectToMongo = require("./Database/db");
const cors = require("cors");
const teamrouter = require("./Routes/TeamRoutes")
const swaggerUi = require("swagger-ui-express");
const spec = require("./swagger/swagger.Json");

require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT;


connectToMongo();
//routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec))
app.use("/", require("./Routes/Events"));
app.use("/team", teamrouter);


app.listen( port,  () =>{
  console.log(`Server on ${port}`);
})