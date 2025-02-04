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