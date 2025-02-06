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
});

// Get request

router.get("/getBooks", async(req,res)=>{
    let books;
    try {
        books= await bookModel.find();
        res.status(200).json({books})
    } catch (error) {
        console.log(error);
    }
});

// get request introducing slug

router.get("/getBooks/:id", async (req,res) =>{
    let book;
    let id=req.params.id;
    try {
      book= await bookModel.findById(id);
      res.status(200).json(book)  
    } catch (error) {
        console.log(error);
    }
})
 
//update book by id

router.put("/updateBook/:id", async (req,res)=>{
    let updated;
    let updateDetail;
    let id=req.params.id;
    try {
        updateDetail=req.body;
        updated=await bookModel.findByIdAndUpdate(id,updateDetail);
        updated.save().then(()=>{
            res.status(200).json({message:"update sucessfull"})
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports =router;