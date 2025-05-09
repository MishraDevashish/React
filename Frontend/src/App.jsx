import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/home'
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

export default App
