# 📚 BookStore App

A full-stack Book Management System built with the MERN stack. Users can add, update, and delete books with details such as name, author, price, and cover image.

---

## 🔗 Live Demo


## 🛠 Tech Stack

- **Frontend:** React.js, TailwindCSS,  
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Postman (API testing),Cross,Axios, Git, GitHub

---

## 🚀 Features

- 📄 Add a book with name, author, description, price, and image
- 📝 Edit existing book details
- ❌ Delete books
- 📦 Display book cards in a responsive grid
- 🔍 Real-time form validation and feedback
- 💡 Clean and user-friendly UI

---

## 📁 Project Structure

📦 BookStore
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── ...
├── server/ # Express backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── ...
 
## 📷 Screenshots
 
 ![Homepage](./imgss/Screenshot%202025-06-16%20223015.png)
![Book Section](./imgss/Screenshot%202025-06-16%20223033.png)
![Add Book](./imgss/Screenshot%202025-06-16%20223052.png)

## 💻 Getting Started

### Prerequisites
- Node.js
- MongoDB (local)
- Git

### Installation

1. Clone both repos:

```bash
git clone https://github.com/MishraDevashish/React/Backend
git clone https://github.com/MishraDevashish/React/Frontend
```

2. Install dependencies:
 ```bash
 cd Frontend
npm install

cd ../backend
npm install 
```
3. Working with Backend

   1. Connecting with Local MongoDB
  ```bash
   const mongoose= require("mongoose");
   mongoose.connect("mongodb://localhost:27017").then(()=>{console.log("Connected")})
  ``` 
   2. Making Schema 
   ```bash
   const mongoose = require("mongoose")
   const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    bookname:{type:String, required:true},
    image: { type: String, required: true },
    price:{type: Number, required:true}
});

module.exports= new mongoose.model("reactBooks",bookSchema);
```
   3. Then Making Routes for post get and put request
   ```bash
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
```

- Get request
```bash
router.get("/getBooks", async(req,res)=>{
    let books;
    try {
        books= await bookModel.find();
        res.status(200).json({books})
    } catch (error) {
        console.log(error);
    }
});
```
- get request introducing slug
```bash
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
 ```
 - update book by id
```bash
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
```
-last delete route
```bash
router.delete("/delete/:id", async(req,res)=>{
    let id=req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(()=>{
            res.status(200).json({message:"book is deleted"})
        });
    } catch (error) {
        console.log(error)
    }
})
module.exports =router;
```
4. Real server which connect all routes
```bash
const express = require("express");
const app= express();
const bookRoute = require("./routes/booksRoutes");
const cors= require("cors");
require("./connection/conn")
app.use(cors());
app.use(express.json())
app.use("/api/v1",bookRoute)




app.listen(3000,()=>{
    console.log("Server get started")
});
```
5. Working with frontend
<p>In this we work on multiple pages and component such as navbar footer and Booksection and use axios for api request and add cross support for the cross function service and use parsing json method to parse data come from backend.</p>

- Main App code where we add all route
```bash
  import './App.css'
  import Navbar from './Component/Navbar'
  import Home from './Pages/home'
   import { useState } from 'react'
  import AddBooks from './Pages/AddBooks'
  import Books from './Pages/Books'
  import Update from './Pages/Update'
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
  import Footer from './Component/Footer'
  function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books/>}/>
        <Route path="/AddBooks" element={<AddBooks/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      <Footer/>
    </Router>
    
   

    
    
  )
}

export default App;
```
## 📬 Contact

**Devashish Mishra**  
📧 devashishmishra39@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/mishra-devashish11/)  

---

> ⭐ *If you like this project, please give it a star on GitHub!*  