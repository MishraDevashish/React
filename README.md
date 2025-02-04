!! hello it is the first git push!!
# This is the code of srver.js to accuire express 
const express = require("express");.
<br>
const app= express();
 # We make a route to handel add delete and update request so here impoted it
const bookRoute = require("./routes/booksRoutes");
# we get a connenction module here
require("./connection/conn")
# for parsing json in express 
app.use(express.json())
#use of middleware
app.use("/api/v1",bookRoute)




app.listen(3000,()=>{
    console.log("Server get started")
});
// bookSchema 
# making schema
const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    bookname: { type: String, required: true },
    image: { type: String, required: true },
    price:{type: Number, required:true}
});

module.exports= new mongoose.model("reactBooks",bookSchema);

// booksRoutes
const router= require("express").Router();
const bookModel = require("../Model/bookSchema");

router.post("/add", async (req,res)=>{
    try {
       const data = req.body;
       const newBook= new bookModel(data);
       await newBook.save().then(()=>{
        res.status(200).json({message:"Book Added Successfuly"})
    }); 
    } catch (error) {
        console.log(error);
    }
})

module.exports =router;

//conn
const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/").then(()=>{console.log("Connected")})