const express = require("express");
const connectToMOngo = require("./Database/db");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const spec = require("./swagger/swagger.Json");

require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;


connectToMOngo();
//routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec))
app.use("/", require("./Routes/Events"));


app.listen( port,  () =>{
  console.log(`Server on ${port}`);
})