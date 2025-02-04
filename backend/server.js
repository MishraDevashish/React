const express = require("express");
const app= express();
const bookRoute = require("./routes/booksRoutes");
require("./connection/conn")
app.use(express.json())
app.use("/api/v1",bookRoute)




app.listen(3000,()=>{
    console.log("Server get started")
});