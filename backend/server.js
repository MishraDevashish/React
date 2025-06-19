require('dotenv').config();
const express = require("express");
const app= express();
const bookRoute = require("./routes/booksRoutes");
const cors= require("cors");
require("./connection/conn")
app.use(cors());
app.use(express.json())
app.use("/api/v1",bookRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server get started")
});